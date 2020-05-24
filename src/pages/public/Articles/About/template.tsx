import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Article } from '../../../../components/Article'

interface AboutPageProps extends RouteComponentProps { }

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (<>
    <Article
      title={"About the project"}>
      TODO: Talk about the project
        </Article>
  </>)
}
