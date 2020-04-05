import React from "react"

export const EmptyState: React.FC<{ message: string }> = ({ message }) => {
  return <div>
    <h3>{message}</h3>
  </div>
}