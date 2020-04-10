import React from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableHeadRow,
  TableCell,
  FeatureList,
  FeatureListItem,
  DataTableWrapper,
  ActionLinkList
} from './styles'

import { Loader } from '../Loader/template'
import { ExternalLink } from '../ExternalLink'
import { TextLink } from '../TextLink/styles'
import { EmptyState } from '../EmptyState/template'
import { DataContextType, DataContext } from '../../types/inventory/VentilatorTypes'
import { ActionLinkTypes, ActionLink } from '../ActionLink/template'
import axios from "axios"
import { toast } from "react-toastify"


const tablehead = [
  "Type",
  "Make",
  "Model",
  "Features",
  "Link"
]

const tableheadSubmitted = [
  "Type",
  "Make",
  "Model",
  "Features",
  "Link",
  "Actions"
]

export interface DataTableInterface {
  data: any,
  context: DataContextType,
  isLoading: boolean
}

export const DataTable: React.FC<DataTableInterface> = ({ data, context, isLoading }) => {

  const handleEdit = (evt: React.MouseEvent) => {
    evt.preventDefault()
    console.log("Edit!")
  }

  const handleVerify = (evt: React.MouseEvent) => {
    evt.preventDefault()
    console.log("Verify!")
  }

  const handleDelete = (evt: React.MouseEvent) => {
    evt.preventDefault()
    const id = evt.currentTarget.id

    axios.post(
      `http://localhost:8081/submitted/delete/${id}`,
    ).then(result => {
      if (result.status === 200) {
        toast.success("Ventilator submission deleted!")
      }
    })
      .catch(err => toast.error(err.message));

  }

  return (
    <DataTableWrapper>
      {
        isLoading
          ? <Loader />
          : <Table>
            <TableHead>
              <TableHeadRow>
                {context === DataContext.submitted
                  ? tableheadSubmitted.map((head) => <TableCell key={head}>{head}</TableCell>)
                  : tablehead.map((head) => <TableCell key={head}>{head}</TableCell>)
                }
              </TableHeadRow>
            </TableHead>
            <TableBody>
              {data && data.length > 0
                ? data.map((item: any) => {
                  return <tr key={item.id}>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.make}</TableCell>
                    <TableCell><TextLink to={`/detail/${item.id}`}>{item.model}</TextLink></TableCell>
                    <TableCell>
                      <FeatureList>{item && item.features && item.features.length > 0 && item.features.map((feature: any) => <FeatureListItem key={feature}>{feature}</FeatureListItem>)}</FeatureList>
                    </TableCell>
                    <TableCell>
                      <ExternalLink link={item.link} label={"Product page"} />
                    </TableCell>
                    {context === DataContext.submitted && <TableCell>
                      <ActionLinkList>
                        <ActionLink type={ActionLinkTypes.edit} onClick={handleEdit} id={item.id} />
                        <ActionLink type={ActionLinkTypes.verify} onClick={handleVerify} id={item.id} />
                        <ActionLink type={ActionLinkTypes.delete} onClick={handleDelete} id={item.id} />
                      </ActionLinkList>
                    </TableCell>
                    }

                  </tr>
                })
                : <EmptyState message={"No entries found"} />
              }
            </TableBody>
          </Table>
      }

    </DataTableWrapper>
  )
}
