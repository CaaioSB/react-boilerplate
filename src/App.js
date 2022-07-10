import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'theme'

/**
 * Default component that renders the first page.
 * @return The button with Botão text.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Hello World</Button>
    </ThemeProvider>
  )
}

export default App
