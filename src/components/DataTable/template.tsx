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
import { Link } from '@reach/router'
import { ExternalLink } from '../ExternalLink'
import { TextLink } from '../TextLink/styles'
import { EmptyState } from '../EmptyState/template'

const tablehead = [
  "Type",
  "Make",
  "Model",
  "Features",
  "Link"
]

export interface DataTableInterface {
  data: any,
  isLoading: boolean
}

export const DataTable: React.FC<DataTableInterface> = ({ data, isLoading }) => {
  return (
    <DataTableWrapper>
      {
        isLoading
          ? <Loader />
          : <Table>
            <TableHead>
              <TableHeadRow>
                {tablehead.map((head) => <TableCell key={head}>{head}</TableCell>)}
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
