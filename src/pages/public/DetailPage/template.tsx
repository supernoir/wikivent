import React, { useEffect, useState } from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import { Paper } from '../../../components/Paper'
import { Section } from '../../../components/Section'
import axios from "axios"
import { ExternalLink } from '../../../components/ExternalLink'
import { Model, Segment, Make, Head, BackLink, FeatureList, FeatureListItem } from './styles'

interface ItemDetailPageProps extends RouteComponentProps {
  id?: string
}

export const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(
      `http://localhost:8081/approved/get/${id}`,
    ).then(result => setApprovedItems([result.data]));
  }, [])


  function setApprovedItems(newData: any) {
    setData(newData)
  }

  return (<Paper>
    <Section>
      <Segment>
        <BackLink to={"/"}>{"Back to Overview"}</BackLink>
      </Segment>
      {data && data.map((detail: any) => {
        return (<>
          <Segment>
            <Head>
              <Make>{detail.make}</Make>
              <Model>{detail.model}</Model>
            </Head>
            <FeatureList>
              {detail.features && detail.features.map((feature: any) => {
                return <FeatureListItem>{feature}</FeatureListItem>
              })}
            </FeatureList>
          </Segment>
          <Segment>
            <ExternalLink link={detail.link} label={"Product page"} />
          </Segment>
        </>
        )
      })}
    </Section>

  </Paper>)
}