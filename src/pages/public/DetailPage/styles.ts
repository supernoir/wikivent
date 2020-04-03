import styled from "styled-components"
import { Link } from "@reach/router"

export const Segment = styled.div`
  margin: 0.5em 0 1em 0;
`

export const Make = styled.h1`
  margin: 0;
  color: grey;
  font-weight: normal;
  margin: 0 0.2em 0 0;
`

export const Model = styled.h1`
  margin: 0;
  color: black;
  font-weight: bold;
`

export const Head = styled.div`
  display: flex;
  flex-direction: row;
`

export const BackLink = styled(Link)`
  color: cadetblue;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: black;
  } 
`

export const FeatureList = styled.ul`
  margin: 1em 0;
  padding: 0 1em;
`

export const FeatureListItem = styled.li`
  color: darkgray;
`