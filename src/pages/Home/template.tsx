import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { DataTable } from '../../components/DataTable/template'
import { Paper } from '../../components/Paper/styles'

interface HomePageProps extends RouteComponentProps { }

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (<Paper>
    <DataTable />
  </Paper>)
}