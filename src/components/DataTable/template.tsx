import React from 'react'
import TestData from "./../../data/testdata.json"

const tablehead = [
  "Type",
  "Make",
  "Model",
  "Features",
  "Link"
]

export const DataTable: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          {tablehead.map((head) => <td key={head}>{head}</td>)}
        </tr>
      </thead>
      <tbody>
        {TestData.map(item => {
          return <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.make}</td>
            <td>{item.model}</td>
            <td>
              <ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
            </td>
            <td><a href={item.link}>{"Product page"}</a></td>
          </tr>
        })}
        <tr></tr>
      </tbody>
    </table>
  )
}