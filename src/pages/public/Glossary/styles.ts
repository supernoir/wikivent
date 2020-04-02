import styled from "styled-components"

export const GlossaryList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const GlossaryListItem = styled.li`
  margin: 1em 0;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
`

export const Term = styled.span`
  font-weight: bold;
  margin-right: 0.5em;
  padding-bottom: 0.5em;
`

export const Explanation = styled.span`
  font-size: 16px;
  padding-bottom: 0.5em;
`

export const Description = styled.span`
  font-size: 12px;
  color: grey;
`