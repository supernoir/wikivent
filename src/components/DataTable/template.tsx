import React from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableHeadRow,
  TableCell,
  FeatureList,
  FeatureListItem,
  DataTableWrapper
} from './styles'

import { Loader } from '../Loader/template'
import { ExternalLink } from '../ExternalLink'
import { TextLink } from '../TextLink/styles'
import { EmptyState } from '../EmptyState/template'
import { DataContextType, DataContext } from '../../types/inventory/VentilatorTypes'

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
                      <TextLink to="/">{"Edit"}</TextLink>
                      <TextLink to="/">{"Verify"}</TextLink>
                      <TextLink to="/">{"Delete"}</TextLink>
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
