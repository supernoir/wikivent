import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Article } from '../../../../components/Article'
import { Paragraph } from '../../../../components/Paragraph/template'

interface ApiDocsPageProps extends RouteComponentProps { }

export const ApiDocsPage: React.FC<ApiDocsPageProps> = (props) => {
  return (<>
    <Article
      title={"API Documentation"}>
      <Paragraph>
        We are currently working on a publicly available API to access our database of ventilators. We will keep you posted about any progress and will hopefully allow beta access as soon as possible.
        </Paragraph>
    </Article>
  </>)
}
