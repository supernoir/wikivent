import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`

export const FormComponent = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 1em 0;
`

export const TextInput = styled.input`
  font-family: "Source Sans Pro", sans-serif;
  padding: 1em;
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

export const TextArea = styled.textarea`
  font-family: "Source Sans Pro", sans-serif;
  padding: 1em;
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
  margin: 1em 0;
`
