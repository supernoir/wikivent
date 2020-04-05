import React, { useState } from "react"

export type Option = {
  id: string | number,
  label: string,
  value: string | number
}

export interface SelectInterface {
  label?: string;
  options: Option[];
  id?: string;
  onChange?: (id: string, val: string) => void
}

export const Select: React.FC<SelectInterface> = ({ id, label, options, onChange }) => {
  const [selection, setSelection] = useState({})

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault()
    let newSelection = evt?.currentTarget?.value
    setSelection(newSelection)
    if (onChange) {
      const formId = evt.currentTarget.id
      onChange(formId, newSelection)
    }
  }

  return (
    <div>
      <label>{label}</label>
      <select id={id || "select"} onChange={handleChange}>
        {options.map((option: Option) => {
          return <option key={option.id} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}