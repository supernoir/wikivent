import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  body {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  background: snow;
  }
`

export const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: goldenrod;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`