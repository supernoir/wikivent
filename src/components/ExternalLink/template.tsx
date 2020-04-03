import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Anchor } from "./styles"

export interface ExtLinkProps {
  link: string,
  label: string
}

export const ExternalLink: React.FC<ExtLinkProps> = ({ link, label }) => {
  return (
    <Anchor href={link}><FontAwesomeIcon icon={faExternalLinkAlt} /> {label}</Anchor>
  )
}