import styled from "styled-components"
import { Button as GrommetButton } from 'grommet'
export const Button = styled(GrommetButton)`
  color: snow;
  padding: 1em;
  margin: 1em 0;
  text-decoration: none;
  background: black;
  border-radius: 4px;
  font-weight: bold;
  border: 2px solid black;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: transparent;
    border: 2px solid black;
    color: black;
  }
`;