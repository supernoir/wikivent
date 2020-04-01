import React from 'react'
import TestData from "./../../data/testdata.json"
import {
  Table,
  TableHead,
  TableBody,
  TableHeadRow,
  TableCell,
  FeatureList,
  FeatureListItem,
  ExternalLink
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const tablehead = [
  "Type",
  "Make",
  "Model",
  "Features",
  "Link"
]

export const DataTable: React.FC = () => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          {tablehead.map((head) => <TableCell key={head}>{head}</TableCell>)}
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {TestData.map(item => {
          return <tr key={item.id}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.make}</TableCell>
            <TableCell><FontAwesomeIcon icon={faFileAlt} />{item.model}</TableCell>
            <TableCell>
              <FeatureList>{item.features.map(feature => <FeatureListItem key={feature}>{feature}</FeatureListItem>)}</FeatureList>
            </TableCell>
            <TableCell>
              <ExternalLink href={item.link}><FontAwesomeIcon icon={faExternalLinkAlt} /> {"Product page"}</ExternalLink>
            </TableCell>
          </tr>
        })}
        <tr></tr>
      </TableBody>
    </Table>
  )
}
