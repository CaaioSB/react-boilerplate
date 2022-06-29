import { render } from '@testing-library/react'
import App from './App'

test('renders empty screen', () => {
  const { container } = render(<App />)

  expect(container.innerHTML).toBe('<div></div>')
})
