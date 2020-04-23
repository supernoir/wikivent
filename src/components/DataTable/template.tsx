import React from 'react'
import {
  FeatureList,
  FeatureListItem,
  DataTableWrapper,
  ActionLinkList
} from './styles'

import { Loader } from '../Loader/template'
import { ExternalLink } from '../ExternalLink'
import { TextLink } from '../TextLink/styles'
import { DataContextType, DataContext } from '../../types/inventory/VentilatorTypes'
import { ActionLinkTypes, ActionLink } from '../ActionLink/template'
import axios from "axios"
import { toast } from "react-toastify"
import { DataTable as GrommetDataTable, Text } from "grommet"

export interface DataTableInterface {
  data: any,
  context: DataContextType,
  isLoading: boolean
}

export const DataTable: React.FC<DataTableInterface> = ({ data, context, isLoading }) => {

  const columnsApproved = [
    {
      property: 'type',
      header: <Text>Type</Text>,
      sortable: true,
      primary: true,
    },
    {
      property: 'make',
      header: <Text>Make</Text>,
      sortable: true
    },
    {
      property: 'model',
      header: <Text>Model</Text>,
      render: (item: any) => <TextLink to={`/detail/${item.id}`}>{item.model}</TextLink>,
      sortable: true
    },
    {
      property: 'features',
      header: <Text>Features</Text>,
      render: (item: any) => <FeatureList>
        {item && item.features && item.features.length > 0 && item.features.map((feature: any) => <FeatureListItem key={feature}>{feature}</FeatureListItem>)}
      </FeatureList>
    },
    {
      property: 'link',
      header: <Text>Link</Text>,
      render: (item: any) => <ExternalLink link={item.link} label={"Product page"} />
    }
  ]

  const columnsSubmitted = [
    {
      property: 'type',
      header: <Text>Type</Text>,
      sortable: true,
      primary: true,
    },
    {
      property: 'make',
      header: <Text>Make</Text>,
      sortable: true
    },
    {
      property: 'model',
      header: <Text>Model</Text>,
      render: (item: any) => <TextLink to={`/detail/${item.id}`}>{item.model}</TextLink>,
      sortable: true
    },
    {
      property: 'features',
      header: <Text>Features</Text>,
      render: (item: any) => <FeatureList>
        {item && item.features && item.features.length > 0 && item.features.map((feature: any) => <FeatureListItem key={feature}>{feature}</FeatureListItem>)}
      </FeatureList>
    },
    {
      property: 'link',
      header: <Text>Link</Text>,
      render: (item: any) => <ExternalLink link={item.link} label={"Product page"} />
    },
    {
      property: 'actions',
      header: <Text>Actions</Text>,
      render: (item: any) => <ActionLinkList>
        <ActionLink type={ActionLinkTypes.edit} onClick={handleEdit} id={item.id} />
        <ActionLink type={ActionLinkTypes.verify} onClick={handleVerify} id={item.id} />
        <ActionLink type={ActionLinkTypes.delete} onClick={handleDelete} id={item.id} />
      </ActionLinkList>
    }
  ]

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
          : <GrommetDataTable
            background={{
              "header": "white",
              "body": ["white", "light-2"]
            }
            }
            columns={context === DataContext.submitted
              ? columnsSubmitted
              : columnsApproved
            }
            data={data}
          />
      }
    </DataTableWrapper>
  )
}
