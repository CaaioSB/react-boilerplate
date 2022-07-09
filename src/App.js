import { ThemeProvider } from '@mui/material/styles'
import Button from 'components/Button'

import theme from 'themes'

/**
 * Default component that renders the first page.
 * @return The button with Hello World text.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </ThemeProvider>
  )
}

export default App
