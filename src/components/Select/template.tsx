import React, { useState } from "react"

export type Option = {
  id: string | number,
  label: string,
  value: string | number
}

export interface SelectInterface {
  label: string;
  options: Option[];
  onChange?: () => void
}


export const Select: React.FC<SelectInterface> = ({ label, options, onChange }) => {
  const [selection, setSelection] = useState({})

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault()
    let newSelection = evt?.currentTarget?.value
    setSelection(newSelection)
  }

  return (
    <div>
      <label>{label}</label>
      <select onChange={handleChange}>
        {options.map((option: Option) => {
          return <option key={option.id} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}