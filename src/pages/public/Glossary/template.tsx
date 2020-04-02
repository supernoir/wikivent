import React from 'react'
import { RouteComponentProps } from '@reach/router'
import {
  GlossaryList,
  GlossaryListItem,
  Term,
  Explanation,
  Description
} from './styles'
import { Paper } from '../../../components/Paper'
import { Section } from '../../../components/Section'

interface GlossaryPageProps extends RouteComponentProps { }

const glossary = [
  {
    id: 1,
    term: "PEEP",
    explanation: "Positive end-expiratory pressure",
    desc: ""
  },
  {
    id: 2,
    term: "NIV",
    explanation: "Non-invasive ventilation",
    desc: "Ventilation that can be administered through non-invasive methods, e.g. a mask covering mouth and nostrils"
  },
]

export const GlossaryPage: React.FC<GlossaryPageProps> = (props) => {
  return (<Paper>
    <Section>
      <h1>{"Glossary"}</h1>
      <GlossaryList>
        {glossary.map(item => {
          return <GlossaryListItem key={item.id}>
            <Term>{item.term}</Term>
            <Explanation>{item.explanation}</Explanation>
            <Description>{item.desc}</Description>
          </GlossaryListItem>
        })}
      </GlossaryList>
    </Section>

  </Paper>)
}