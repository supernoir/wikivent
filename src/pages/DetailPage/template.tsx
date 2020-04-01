import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Paper } from '../../components/Paper'
import { Section } from '../../components/Section'

interface ItemDetailPageProps extends RouteComponentProps {
  id?: string
}

export const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  return (<Paper>
    <Section>
      <h1>{"Glossary"}</h1>
      {id}
    </Section>

  </Paper>)
}