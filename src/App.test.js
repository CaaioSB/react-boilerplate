import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import { hexToRgb } from 'utils/styles'

import App from './App'
import theme from 'theme'

it('should render a button with Hello World text', () => {
  const { getByRole } = render(<App />)
  const button = getByRole('button')
  const buttonStyle = window.getComputedStyle(button)
  const backgroundColor = buttonStyle['background-color']

  expect(backgroundColor).toEqual(hexToRgb(theme.palette.primary.main).rgb)
  expect(button).toHaveTextContent('Hello World')
})
