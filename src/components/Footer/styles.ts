import styled from "styled-components"
import { Link } from "@reach/router"

export const StyledFooter = styled.footer`
  margin: 1em 0;
  color: snow;
`

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
  text-decoration: underline;
  }
`