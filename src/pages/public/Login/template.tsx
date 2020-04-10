import React, { useState } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'
import { Paper } from '../../../components/Paper'
import { Section } from '../../../components/Section'
import { FormComponent, Form, Label, TextInput } from '../../../components/FormComponents/styles'
import { Button } from '../../../components/Button'
import { Segment } from '../../../components/Segment/styles'
import { BackLink } from '../../../components/BackLink/styles'
import axios from "axios"
import { toast } from "react-toastify"

interface LoginPageProps extends RouteComponentProps {
}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [form, setForm] = useState({})

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const formValue = evt.currentTarget.value;
    const formId = evt.currentTarget.id
    setForm({ ...form, [formId]: formValue })
  }

  const handleSubmit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (Object.keys(form).length > 0) {
      axios.get(
        `http://localhost:8081/user`, form
      ).then(result => {
        if (result.status = 200) {
          toast.success("Welcome back!")
          navigate(`/review`)
        }
      })
        .catch(err => toast.error(err.message));
    } else {
      toast.error("Missing input")
    }
  }

  return (<Paper>
    <Section>
      <Segment>
        <BackLink to={"/"}>{"Back to Overview"}</BackLink>
        <Form>
          <FormComponent>
            <Label>Make</Label>
            <TextInput id="username" type="text" placeholder={"jane.doe@sample.com"} onChange={handleInput} required />
          </FormComponent>
          <FormComponent>
            <Label>Model</Label>
            <TextInput id="password" type="password" placeholder={"S3CR3T"} onChange={handleInput} required />
          </FormComponent>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Segment>
    </Section>

  </Paper>)
}