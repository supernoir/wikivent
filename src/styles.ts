import styled, { createGlobalStyle } from "styled-components"
import { Box, Main } from "grommet"

export const GlobalStyle = createGlobalStyle`
  html, body, #root, .App {
  min-height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  zoom: 1;
  background: linear-gradient(60deg, cadetblue, springgreen);
  }
`

export const StyledApp = styled(Main)`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: safe center;
`

export const PageContainer = styled(Box)`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: safe start;
  overflow: auto;
`
