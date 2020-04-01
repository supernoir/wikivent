import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Paper } from '../../components/Paper/styles'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button/style'
import {
  Form,
  FormComponent,
  TextInput,
  TextArea,
  Label
} from './styles'

interface FormPageProps extends RouteComponentProps { }

export const FormPage: React.FC<FormPageProps> = (props) => {

  const [form, setForm] = useState({})

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    evt.preventDefault();
    const formValue = evt.currentTarget.value;
    const formId = evt.currentTarget.id
    setForm({ ...form, [formId]: formValue })
  }

  const handleSubmit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (Object.keys(form).length > 0) {
      console.log(form)
    } else {
      console.error("Missing input")
    }
  }

  return (<Paper>
    <Section>
      <h1>Submit Ventilator</h1>
      <h3>Are we missing something? Please submit missing models to help us complete the database</h3>
      <p>We will validate your submission and add the missing ventilator as soon as possible</p>
      <Form>
        <FormComponent>
          <Label>Make</Label>
          <TextInput id="make" type="text" onChange={handleInput} required />
        </FormComponent>
        <FormComponent>
          <Label>Model</Label>
          <TextInput id="model" type="text" onChange={handleInput} required />
        </FormComponent>
        <FormComponent>
          <Label>Features</Label>
          <TextArea id="features" onChange={handleInput} />
        </FormComponent>
        <FormComponent>
          <Label>Link</Label>
          <TextInput id="link" type="text" onChange={handleInput} />
        </FormComponent>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </Section>
  </Paper>)
}