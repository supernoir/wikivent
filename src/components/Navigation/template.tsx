import React from 'react'
import { StyledNavigationList, StyledNavigationListItem, StyledLink } from './styles'
import { Select } from '../Select/template'

type MenuItem = {
  id: number;
  target: string;
  label: string;
}

export const menuitems: MenuItem[] = [
  {
    id: 1,
    target: "/",
    label: "Home"
  },
  {
    id: 2,
    target: "/form",
    label: "Submit ventilator"
  },
  {
    id: 3,
    target: "/glossary",
    label: "Glossary"
  },
  {
    id: 4,
    target: "/about",
    label: "About the Project"
  },
]

const languageOptions = [
  {
    id: 0,
    label: "English",
    value: "en"
  },
  {
    id: 1,
    label: "German",
    value: "de"
  },
  {
    id: 2,
    label: "French",
    value: "fr"
  }
]

export const Navigation: React.FC = () => {
  return (
    <nav>
      <StyledNavigationList>
        {menuitems.map((item: MenuItem) => {
          return (
            <StyledNavigationListItem key={item.id}>
              <StyledLink to={item.target}>
                {item.label}
              </StyledLink>
            </StyledNavigationListItem>
          )
        })}
      </StyledNavigationList>
      <Select options={languageOptions} />
    </nav>
  )
}