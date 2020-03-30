import React from 'react'
import { RouteComponentProps } from '@reach/router'

interface AboutPageProps extends RouteComponentProps { }

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (<main>
    {"About the project"}
  </main>)
}