import React from "react"
import { ExternalLink } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export interface ExtLinkProps {
  link: string,
  label: string
}

export const ExtLink: React.FC<ExtLinkProps> = ({ link, label }) => {
  return (
    <ExternalLink href={link}><FontAwesomeIcon icon={faExternalLinkAlt} /> {label}</ExternalLink>
  )
}