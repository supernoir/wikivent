import React from 'react'
import { Name, Highlight, Logo, StyledLogo, StyledHeader } from './styles'
import { Navigation } from '../Navigation/template'

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo><StyledLogo /><Name>WIKI<Highlight>Vent</Highlight></Name></Logo>
      <Navigation />
    </StyledHeader>
  )
}
