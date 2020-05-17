import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Article } from '../../../../components/Article'

interface ApiDocsPageProps extends RouteComponentProps { }

export const ApiDocsPage: React.FC<ApiDocsPageProps> = (props) => {
  return (<>
    <Article
      title={"API Documentaiton"}>
      TODO: Explain API usage, include Swagger UI like interface
        </Article>
  </>)
}
