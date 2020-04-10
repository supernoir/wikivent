import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { ActionLink, ActionLinkTypes } from './template'

const onClickMock = jest.fn()

test('Renders ActionLink with type delete', async () => {
  const container = render(<ActionLink type={ActionLinkTypes.delete} id={"test"} onClick={onClickMock} />)

  fireEvent.click(screen.getByText('Delete'))
  expect(onClickMock).toHaveBeenCalled()
  expect(container).toMatchSnapshot()
})

test('Renders ActionLink with type edit', async () => {
  const container = render(<ActionLink type={ActionLinkTypes.edit} id={"test"} onClick={onClickMock} />)

  fireEvent.click(screen.getByText('Edit'))
  expect(onClickMock).toHaveBeenCalled()
  expect(container).toMatchSnapshot()
})

test('Renders ActionLink with type verify', async () => {
  const container = render(<ActionLink type={ActionLinkTypes.verify} id={"test"} onClick={onClickMock} />)

  fireEvent.click(screen.getByText('Verify'))
  expect(onClickMock).toHaveBeenCalled()
  expect(container).toMatchSnapshot()
})