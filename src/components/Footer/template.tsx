import React from 'react'
import { StyledFooter, FooterLink } from './styles'

export const Footer: React.FC = () => {
  return (<StyledFooter>
    <span>&copy; Wikivent 2020</span> | <FooterLink to="/api">API Documentation</FooterLink> | <FooterLink to="/verification">Verification Process</FooterLink>
  </StyledFooter>)
}