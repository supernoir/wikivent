import React from "react"
import { StyledHeadline, StyledParagraph } from "./styles"

export interface ParagraphProps {
  headline?: string;
  children?: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ headline, children }) => {
  return (
    <>
      {headline
        ? <StyledHeadline>{headline}</StyledHeadline>
        : null
      }
      <StyledParagraph>{children}</StyledParagraph>
    </>
  )
}