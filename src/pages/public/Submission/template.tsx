import React, { useState } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'
import { Paper } from '../../../components/Paper/styles'
import { Section } from '../../../components/Section'
import { VentilatorFormModes, DataContext } from '../../../types/inventory/VentilatorTypes'
import { VentilatorForm } from '../../../components/VentilatorForm/template'

interface FormPageProps extends RouteComponentProps { }

export const FormPage: React.FC<FormPageProps> = (props) => {
  return (<Paper>
    <Section>
      <h1>Submit Ventilator</h1>
      <h3>Are we missing something? Please submit missing models to help us complete the database</h3>
      <p>We will validate your submission and add the missing ventilator as soon as possible</p>
      <VentilatorForm mode={VentilatorFormModes.create} context={DataContext.submitted} />
    </Section>
  </Paper>)
}