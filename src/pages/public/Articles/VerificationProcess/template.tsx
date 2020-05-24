import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Article } from '../../../../components/Article'

interface VerificationProcessPageProps extends RouteComponentProps { }

export const VerificationProcessPage: React.FC<VerificationProcessPageProps> = (props) => {
  return (<>
    <Article
      title={"Verification Process"}>
      TODO: Explain verification process
        </Article>
  </>)
}
