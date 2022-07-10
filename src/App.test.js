import '@testing-library/jest-dom/extend-expect'
import App from 'App.js'
import colors from 'theme/colors'
import { hexToRgb } from 'utils/styles'
import { render } from '@testing-library/react'

it('should render a button with Hello World text', () => {
  const { getByRole } = render(<App />)
  const button = getByRole('button')
  const buttonStyle = window.getComputedStyle(button)
  const backgroundColor = buttonStyle['background-color']

  expect(backgroundColor).toEqual(hexToRgb(colors.root[0]).rgb)
  expect(button).toHaveTextContent('Hello World')
})
