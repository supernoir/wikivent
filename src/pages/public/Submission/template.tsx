import React, { useState } from 'react'
import axios from "axios"
import { RouteComponentProps } from '@reach/router'
import { Paper } from '../../../components/Paper/styles'
import { Section } from '../../../components/Section'
import { Button } from '../../../components/Button'
import {
  Form,
  FormComponent,
  TextInput,
  TextArea,
  Label,
  Divider
} from './styles'
import { ventilatorTypeOptions } from '../../../types/inventory/VentilatorTypes'
import { Select } from '../../../components/Select/template'

interface FormPageProps extends RouteComponentProps { }

export const FormPage: React.FC<FormPageProps> = (props) => {

  const [form, setForm] = useState({})

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    evt.preventDefault();
    const formValue = evt.currentTarget.value;
    const formId = evt.currentTarget.id
    setForm({ ...form, [formId]: formValue })
  }

  const handleSelect = (id: string, val: string) => {
    console.log(val)
    setForm({ ...form, [id]: val })
  }

  const handleSubmit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (Object.keys(form).length > 0) {
      axios.post(
        `http://localhost:8081/submitted/new`, form
      ).then(result => console.log(result));
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
          <Select label={"Type of Ventilator"} options={ventilatorTypeOptions} onChange={handleSelect} />
        </FormComponent>
        <Divider />
        <FormComponent>
          <Label>Make</Label>
          <TextInput id="make" type="text" placeholder={"Dräger"} onChange={handleInput} required />
        </FormComponent>
        <FormComponent>
          <Label>Model</Label>
          <TextInput id="model" type="text" placeholder={"Evita v300"} onChange={handleInput} required />
        </FormComponent>
        <FormComponent>
          <Label>Features</Label>
          <TextArea id="features" onChange={handleInput} />
        </FormComponent>
        <FormComponent>
          <Label>Link</Label>
          <TextInput id="link" type="text" placeholder="www.ventilator-producer.com" onChange={handleInput} />
        </FormComponent>
        <Divider />
        <FormComponent>
          <Label>Series</Label>
          <TextInput id="series" type="text" placeholder={"Evita series"} onChange={handleInput} />
        </FormComponent>
        <FormComponent>
          <Label>Specifications</Label>
          <TextArea id="specs" onChange={handleInput} />
        </FormComponent>
        <FormComponent>
          <Label>Availability</Label>
          <TextInput id="availability" placeholder={"EU, EWR, NAFTA, EMEA, ASEAN"} type="text" onChange={handleInput} />
        </FormComponent>
        <FormComponent>
          <Label>Sources</Label>
          <TextInput id="sources" type="text" onChange={handleInput} />
        </FormComponent>
        <FormComponent>
          <Label>FDA regulation number</Label>
          <TextInput id="regNumber" type="text" onChange={handleInput} />
        </FormComponent>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </Section>
  </Paper>)
}