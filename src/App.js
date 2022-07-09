import Button from 'components/Button'
import { ThemeProvider } from '@mui/material/styles'

function App() {
  return (
    <ThemeProvider>
      <Button variant='contained'>Hello World</Button>
    </ThemeProvider>
  )
}

export default App
