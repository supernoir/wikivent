import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Article } from '../../../../components/Article'
import { Paragraph } from '../../../../components/Paragraph/template'

interface AboutPageProps extends RouteComponentProps { }

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <Article title={"About the project"}>
      <Paragraph headline="About the Project">
        Wikivent was started as a concerted effort to give medical professionals quick access to the various types of ventilators available on the market. It is supposed to display an up-to-date overview over existing machines in use today. More ventilators and machines should be added as they are discovered worldwide or launched into the market. Wikivent does not discriminate against types of ventilators because they haven't been produced by a known company, as long as they are actively in use in hospitals or by EMTs and have a known record of safety.
      </Paragraph>

      <Paragraph headline="Volunteer effort">
        Over time, we aim to establish a deep dataset of ventilators with images, comments and common issues as well as their solutions. It does not aim to replace product pages by the respective producer but should allow the users of these machines a more universal platform for comparison.
        As this page is a volunteer effort, the database of ventilators is constantly updated and improved. While working with utmost care and diligence, we cannot guarantee a fault free dataset at all times. However, we strive to make Wikivent the most reliable source on ventilators available on a worldwide scale.
      </Paragraph>

      <Paragraph headline="Contributing - Developers">
        If you are interested in contributing to this effort, please ask to join our GitHub.
      </Paragraph>

      <Paragraph headline="Contributing - Medical Professionals">
        If you are interested in contributing please get in touch with us directly. We need help with updating the glossary, explaining functionalities of ventilators, their categorization and other aspects interesting to your trade and everyday job. We'd also very much appreciate your introducing Wikivent to your colleagues on our behalf.
      </Paragraph>

      <Paragraph headline="Contributing - Content / Translation">
        Currently, Wikivent is only available in English. There are efforts to translate the entire page and the datasets into German, French and Spanish. Ideally, we'd like to cover many more languages and would very much welcome any effort towards that goal. Please sign up to GitHub or write to us directly.
      </Paragraph>

      <Paragraph headline="Contributing - Design">
        Please get in touch with us.
      </Paragraph>
    </Article>
  )
}
