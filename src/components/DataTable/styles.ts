import styled from "styled-components"

export const DataTableWrapper = styled.div`
  max-height: 600px;
  overflow-x: scroll;
`

export const Table = styled.table`
  background: snow;
  padding: 0;
  margin: 1em;
  border-spacing: 0;
  border-collapse: collapse;
  border-radius: 8px;
`

export const TableHead = styled.thead`
  padding-top: 0.5em;
`

export const TableHeadRow = styled.tr`
  font-weight: bold;
  border-bottom: 2px solid black;
`

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background: rgba(0,0,0,0.05);
  }
  tr:nth-child(even) {
    background: snow;
  }
`
export const TableCell = styled.td`
  text-align: left;
  vertical-align: top;
  padding: 1em;
  min-width: 5em;
`

export const FeatureList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding: 0 0 0 20px;
`

export const FeatureListItem = styled.li`
`