//import { render, fireEvent, screen } from '@testing-library/react'
import { appendFilterToUri } from './QueryString'

const mockFilters = {
  type: "SampleType",
  make: "SampleMake",
  model: "SampleModel"
}


test('Returns complete querystring', async () => {
  const testString = appendFilterToUri(mockFilters)
  expect(testString).toEqual(`?type=${mockFilters.type}&make=${mockFilters.make}&model=${mockFilters.model}`)
})
test('Returns partial querystring, only type', async () => {
  const testString = appendFilterToUri({ type: mockFilters.type, make: "", model: "" })
  expect(testString).toEqual(`?type=${mockFilters.type}`)
})

test('Returns partial querystring, only make', async () => {
  const testString = appendFilterToUri({ type: "", make: mockFilters.make, model: "" })
  expect(testString).toEqual(`?make=${mockFilters.make}`)
})

test('Returns partial querystring, only make', async () => {
  const testString = appendFilterToUri({ type: "", make: "", model: mockFilters.model })
  expect(testString).toEqual(`?model=${mockFilters.model}`)
})

test('Returns empty querystring', async () => {
  const testString = appendFilterToUri({ type: "", make: "", model: "" })
  expect(testString).toEqual("")
})