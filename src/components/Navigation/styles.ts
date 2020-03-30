import styled from "styled-components"
import { Link } from "@reach/router";

export const StyledNavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 1em 0 2em;
  list-style-type: none;
`

export const StyledNavigationListItem = styled.li`
margin: 0 10px 0 0;
:last-child {
  margin: 0;
}
`

export const StyledLink = styled(Link)`
  color: snow;
  padding: 1em;
  text-decoration: none;
  background: snow;
  color: lightseagreen;
  border-radius: 8px;
  font-weight: bold;
  border: 2px solid snow;

  &:hover {
    background: goldenrod;
    color: snow;
  }
`;