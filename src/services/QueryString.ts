export const appendFilterToUri = (filters: { type: string, make: string, model: string }) => {
  let queries = [{
    type: filters.type,
    make: filters.make,
    model: filters.model
  }]

  let queryKeys = Object.keys(queries[0])
  let queryValues = Object.values(queries[0])
  let queryString = ""

  if (
    queryValues[0].length > 0
    || queryValues[1].length > 0
    || queryValues[2].length > 0
  ) {
    queryString += "?"
  }

  // Iterate over queries
  for (let i = 0;i < queryKeys.length;i++) {
    // If the current value is not an empty string
    if (queryValues[i].length > 0) {
      // AND If current query value is not the first or last one
      if (queryString.length > 1 && i <= queryValues.length) {
        // prepend ampersand at the end
        queryString += `&`
      }
      // append key value to query
      queryString += `${queryKeys[i]}=${queryValues[i]}`
    }
  }
  return queryString
}