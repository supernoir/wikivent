import React from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableHeadRow,
  TableCell,
  FeatureList,
  FeatureListItem,
  ExternalLink,
  DataTableWrapper
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Loader } from '../Loader/template'

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
                  <TableCell>{item.model}</TableCell>
                  <TableCell>
                    <FeatureList>{item.features.map((feature: any) => <FeatureListItem key={feature}>{feature}</FeatureListItem>)}</FeatureList>
                  </TableCell>
                  <TableCell>
                    <ExternalLink href={item.link}><FontAwesomeIcon icon={faExternalLinkAlt} /> {"Product page"}</ExternalLink>
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
