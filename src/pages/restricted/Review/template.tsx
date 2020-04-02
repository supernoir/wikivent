import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Paper } from '../../../components/Paper'
import { Section } from '../../../components/Section'

interface ReviewPageProps extends RouteComponentProps { }

export const ReviewPage: React.FC<ReviewPageProps> = (props) => {
  return (<Paper>
    <Section>
      <h1>{"Review"}</h1>
    </Section>
  </Paper>)
}