import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Article } from '../../../../components/Article'
import { Paragraph } from '../../../../components/Paragraph/template'

interface VerificationProcessPageProps extends RouteComponentProps { }

export const VerificationProcessPage: React.FC<VerificationProcessPageProps> = (props) => {
  return (<>
    <Article
      title={"Verification Process"}>
      <Paragraph>
        We are trying to make it as simple as possible to submit a new ventilator or update one in our database. However, to guarantee the highest possible accuracy in our data, we require a submitted ventilator to pass through our verification. When you submitted a ventilator to our database, our volunteers will try to verify the data given and publish the updated or new machine to our database as soon as is possible. We are working on a dashboard of submissions under review so you can check on the status of your contribution
        </Paragraph>
    </Article>
  </>)
}
