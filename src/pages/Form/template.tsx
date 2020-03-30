import React from 'react'
import { RouteComponentProps } from '@reach/router'

interface FormPageProps extends RouteComponentProps { }

export const FormPage: React.FC<FormPageProps> = (props) => {
  return (<main>
    {"Add Form"}
  </main>)
}