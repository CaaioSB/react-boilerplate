import { createTheme } from '@mui/material/styles'
import { MuiButton } from 'overrides'

import typography from 'theme/typography'

export const theme = createTheme({
  ...typography,
  shadows: ['none'],

  components: {
    MuiButton
  }
})

export default theme
