import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Article } from '../../../components/Article'

interface AboutPageProps extends RouteComponentProps { }

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <Article
      title={"About the project"}>
      On March 22, 2020 in the midst of a global pandemic, a doctor wrote a New York Times OpEd with a simple request:
      “Big tech needs to rapidly build and scale a cloud-based national ventilator surveillance platform which … would allow hospitals nationwide to report their I.C.U. bed status and their ventilator supply daily, in an unprecedented data-sharing initiative.”
      We are a group of volunteers here to answer the call to action. We built this platform with the mission to:
      provide an aggregated overview of critical ventilator demand.
      connect medical facilities with verified ventilator suppliers.
    </Article>
  )
}
