import styled from "styled-components"
import {
  Form as GrommetForm,
  FormField as GrommetFormField,
  TextArea as GrommetTextArea,
  TextInput as GrommetTextInput
} from "grommet"

export const Form = styled(GrommetForm)`
  display: flex;
  flex-direction: column;
  margin: 0;
`

export const FormComponent = styled(GrommetFormField)`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
`

export const TextInput = styled(GrommetTextInput)`
  font-family: "Source Sans Pro", sans-serif;
  padding: 0.5em;
  color: black;
  background: rgba(0,0,0,0.05);
  box-shadow: none;
  border: 0;
  font-size: 16px;
  outline: 0;
  border-bottom: 2px solid snow;


  &:focus {
    border-bottom: 2px solid black;
  }
`

export const TextArea = styled(GrommetTextArea)`
  font-family: "Source Sans Pro", sans-serif;
  padding: 0.5em;
  color: black;
  background: rgba(0,0,0,0.05);
  box-shadow: none;
  border: 0;
  font-size: 16px;
  outline: 0;
  border-bottom: 2px solid snow;
  resize: none;


  &:focus {
    border-bottom: 2px solid black;
  }
`

export const Label = styled.label`
  margin: 0.5em 0;
`
export const Divider = styled.div`
  margin: 0.5em 0;
  border-bottom: 1px solid grey;
`
