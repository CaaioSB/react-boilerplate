import { render } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom/extend-expect'

it('should render a button with Hello World text', () => {
  const { getByRole } = render(<App />)
  const button = getByRole('button')

  expect(button).toHaveTextContent('Hello World')
})
