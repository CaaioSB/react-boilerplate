import { MuiButton } from 'overrides'
import { createTheme } from '@mui/material/styles'

import palette from 'theme/palette'
import typography from 'theme/typography'

export const theme = createTheme({
  palette,
  typography,
  shadows: ['none'],

  components: {
    MuiButton
  }
})

export default theme
