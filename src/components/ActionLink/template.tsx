import React from "react"
import { StyledActionLink, StyledLabel } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export interface ActionLinkProps {
  id: string,
  type: ActionLinkType,
  onClick: (evt: React.MouseEvent) => void
}

export enum ActionLinkTypes {
  edit = "edit",
  verify = "verify",
  delete = "delete"
}

export type ActionLinkType = ActionLinkTypes.edit | ActionLinkTypes.verify | ActionLinkTypes.delete

export const ActionLink: React.FC<ActionLinkProps> = ({ id, type, onClick }) => {
  switch (type) {
    case ActionLinkTypes.delete:
      return <StyledActionLink onClick={onClick} id={id}>
        <FontAwesomeIcon icon={faTrash} /><StyledLabel>{"Delete"}</StyledLabel>
      </StyledActionLink>
    case ActionLinkTypes.verify:
      return <StyledActionLink onClick={onClick} id={id}>
        <FontAwesomeIcon icon={faCheckCircle} /><StyledLabel>{"Verify"}</StyledLabel>
      </StyledActionLink>
    default:
      return <StyledActionLink onClick={onClick} id={id}>
        <FontAwesomeIcon icon={faPencilAlt} /><StyledLabel>{"Edit"}</StyledLabel>
      </StyledActionLink>
  }
}