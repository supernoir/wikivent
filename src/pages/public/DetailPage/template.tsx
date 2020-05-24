import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Paper } from '../../../components/Paper'
import { Section } from '../../../components/Section'
import { ExternalLink } from '../../../components/ExternalLink'
import { Model, Make, Head, FeatureList, FeatureListItem } from './styles'
import { BackLink } from '../../../components/BackLink/styles'
import { Segment } from '../../../components/Segment/styles'
import VentilatorResource from '../../../resources/VentilatorResource'
import { useResource } from 'rest-hooks'

interface ItemDetailPageProps extends RouteComponentProps {
  id?: string
}

export const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const ventilator = useResource(
    VentilatorResource.detailShape(),
    { id }
  );

  return (<Paper>
    <Section>
      <Segment>
        <BackLink to={"/"}>{"I18N Back to Overview"}</BackLink>
      </Segment>

      <Segment>
        <Head>
          <Make>{ventilator.make}</Make>
          <Model>{ventilator.model}</Model>
        </Head>
        <FeatureList>
          {ventilator.features && ventilator.features.map((feature: any) => {
            return <FeatureListItem>{feature}</FeatureListItem>
          })}
        </FeatureList>
      </Segment>

      <Segment>
        <ExternalLink link={ventilator.link} label={"I18N Product page"} />
      </Segment>
    </Section>

  </Paper>)
}