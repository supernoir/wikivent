import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Paper } from '../../../components/Paper'
import { Section } from '../../../components/Section'
import axios from "axios"

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
    console.log(newData)
    setData(newData)
  }



  return (<Paper>
    <Section>
      {data && data.map((detail: any) => {
        return (
          <div>
            <h1>{detail.make}</h1>
            <h2>{detail.model}</h2>
            <ul>
              {detail.features && detail.features.map((feature: any) => {
                return <li>{feature}</li>
              })}
            </ul>
          </div>
        )
      })}
    </Section>

  </Paper>)
}