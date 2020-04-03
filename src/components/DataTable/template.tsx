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
              {data && data.length > 0 && data.map((item: any) => {
                return <tr key={item.id}>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.make}</TableCell>
                  <TableCell><Link to={`/detail/${item.id}`}>{item.model}</Link></TableCell>
                  <TableCell>
                    <FeatureList>{item.features.map((feature: any) => <FeatureListItem key={feature}>{feature}</FeatureListItem>)}</FeatureList>
                  </TableCell>
                  <TableCell>
                    <ExternalLink link={item.link} label={"Product page"} />
                  </TableCell>
                </tr>
              })}
              <tr></tr>
            </TableBody>
          </Table>
      }

    </DataTableWrapper>
  )
}
