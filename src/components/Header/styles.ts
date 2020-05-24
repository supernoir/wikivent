import styled from "styled-components"
import { ReactComponent as LogoSVG } from "./../../public/images/wikivent_logo.svg"
import { Header as GrommetHeader } from "grommet"

export const Name = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  color: black;
`

export const Highlight = styled.span`
  color: white;
`

export const StyledLogo = styled(LogoSVG)`
  width: 64px;
  margin-right: 10px;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledHeader = styled(GrommetHeader)`
  width: 50em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em;
  border-radius: 6px;
  margin: 1em 0;
`
