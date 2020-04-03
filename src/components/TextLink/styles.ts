import styled from "styled-components"
import { Link } from '@reach/router'

export const TextLink = styled(Link)`
  color: cadetblue;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: black;
  }
`