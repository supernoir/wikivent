import React, { useState } from 'react';
import axios from "axios";
import { RouteComponentProps, navigate } from '@reach/router';
import { Button } from '../Button';
import {
  Form,
  FormComponent,
  TextInput,
  TextArea,
  Label,
  Divider
} from '../FormComponents/styles';
import { Select } from '../Select/template';
import { toast } from "react-toastify";
import { ventilatorTypeOptions, VentilatorFormModeType, DataContextType } from '../../types/inventory/VentilatorTypes';

interface VentilatorFormProps extends RouteComponentProps {
  mode: VentilatorFormModeType,
  context: DataContextType,
  data?: any
}

export const VentilatorForm: React.FC<VentilatorFormProps> = (props) => {

  const [form, setForm] = useState({})

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const formValue = evt.currentTarget.value;
    const formId = evt.currentTarget.id
    setForm({ ...form, [formId]: formValue })
  }

  const handleTextAreaInput = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    const formValue = evt.currentTarget.value.trim().split(",");
    const formId = evt.currentTarget.id
    setForm({ ...form, [formId]: formValue })
  }

  const handleSelect = (id: string, val: string) => {
    setForm({ ...form, [id]: val })
  }

  const handleSubmit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (Object.keys(form).length > 0) {
      axios.post(
        `http://localhost:8081/submitted/new`, form
      ).then(result => {
        if (result.status = 200) {
          toast.success("New ventilator data submitted!")
          navigate(`/`)
        }
      })
        .catch(err => toast.error(err.message));
    } else {
      toast.error("Missing input")
    }
  }

  return (
    <Form>
      <FormComponent>
        <Select label={"Type of Ventilator"} id={"type"} options={ventilatorTypeOptions} onChange={handleSelect} />
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
        <TextArea id="features" onChange={handleTextAreaInput} />
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
        <TextArea id="specs" onChange={handleTextAreaInput} />
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
    </Form>)
}