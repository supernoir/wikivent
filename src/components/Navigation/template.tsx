import React from 'react'
import { StyledNavigationList, StyledNavigationListItem, StyledLink } from './styles'
import { useTranslation } from 'react-i18next';
import { Box, Menu, Nav, ResponsiveContext } from "grommet";
import { navigate } from "@reach/router";

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
    label: "Submit Ventilator"
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

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveContext.Consumer>
      {size =>
        size === "small" ? (
          <Box
            align="end"
            pad="medium"
            round="small"
            background="snow"
          >
          <Menu
            label="Menu"
            dropBackground="snow"
            items={menuitems.map((item: MenuItem) => {
              return {
                label: t(item.label),
                onClick: () => {
                  navigate(item.target)
                },
              };
            })}
          />
          </Box>
        ) : (
          <Nav direction="row">
            <StyledNavigationList>
              {menuitems.map((item: MenuItem) => {
                return (
                  <StyledNavigationListItem key={item.id}>
                    <StyledLink to={item.target}>
                      {t(item.label)}
                    </StyledLink>
                  </StyledNavigationListItem>
                )
              })}
            </StyledNavigationList>
          </Nav>
        )
      }
    </ResponsiveContext.Consumer>
  )
}
