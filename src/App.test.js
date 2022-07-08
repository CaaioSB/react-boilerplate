import { render, screen } from '@testing-library/react'
import App from './App'

render(<App />)

test('render a button with Hello World text', () => {
  const button = screen.getByRole('button')

  expect(button).toHaveTextContent('Hello World')
})
