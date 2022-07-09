import '@testing-library/jest-dom/extend-expect'

import App from './App'

import { render } from '@testing-library/react'

it('should render a button with Hello World text', () => {
  const { getByRole } = render(<App />)
  const button = getByRole('button')

  expect(button).toHaveTextContent('Hello World')
})
