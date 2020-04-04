import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  html, body, #root, .App {
  height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  zoom: 1;
  background: linear-gradient(60deg, cadetblue, springgreen);
  }
`


export const StyledApp = styled.main`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`