import styled from "styled-components"

export const StyledActionLink = styled.a`
  color: cadetblue;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;

  &:hover {
    color: black;
  }
`

export const StyledLabel = styled.span`
  margin: 0 0 0 0.25em;
`