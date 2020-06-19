import React from "react"
import { Paper } from "../Paper"
import { Section } from "../Section"
import { Paragraph } from "grommet"

export interface ArticleProps {
  title: string,
  children: React.ReactNode
}

export const Article: React.FC<ArticleProps> = ({ title, children }) => {
  return (
    <Paper>
      <Section>
        <h1>{title}</h1>
        <Paragraph fill>
          {children}
        </Paragraph>
      </Section>
    </Paper>
  )
}
