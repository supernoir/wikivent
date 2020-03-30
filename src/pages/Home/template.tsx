import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { DataTable } from '../../components/DataTable/template'

interface HomePageProps extends RouteComponentProps { }

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (<main>
    <DataTable />
  </main>)
}