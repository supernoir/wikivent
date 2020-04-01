import React from 'react'
import { StyledLoader, StyledLoaderWrapper, StyledText } from './styles'

export const Loader = () => (
  <StyledLoaderWrapper>
    <StyledLoader />
    <StyledText>{"Loading"}</StyledText>
  </StyledLoaderWrapper>
)