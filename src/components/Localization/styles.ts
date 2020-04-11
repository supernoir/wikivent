import styled from "styled-components"
import { Link } from '@reach/router'

export const LanguageLink = styled(Link)`
  color: snow;
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;

  &:hover {
    color: black;
  }
`

export const LanguageFooter = styled.footer`
  margin: 1em 0;
  color: snow;
`
