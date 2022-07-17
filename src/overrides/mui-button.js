import { BUTTON_BORDER_RADIUS } from 'theme/constants'
import { pxToRem } from 'utils/styles'
import { smoke } from 'theme/colors'

const size = [
  {
    props: { size: 'large' },
    style: {
      padding: `${pxToRem(16)} ${pxToRem(24)}`
    }
  },
  {
    props: { size: 'medium' },
    style: {
      padding: `${pxToRem(14)} ${pxToRem(20)}`
    }
  },
  {
    props: { size: 'small' },
    style: {
      padding: `${pxToRem(10)} ${pxToRem(20)}`
    }
  }
]

const variant = [
  {
    props: { variant: 'contained' },
    style: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,

      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      },

      '&:disabled': {
        backgroundColor: smoke[500],
        color: theme.palette.primary.contrastText
      }
    })
  },
  {
    props: { variant: 'outlined' },
    style: ({ theme }) => ({
      border: `${pxToRem(1)}`,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,

      '&:hover': {
        backgroundColor: theme.palette.primary.contrastText
      },

      '&:disabled': {
        borderColor: smoke[500],
        color: smoke[500]
      }
    })
  },
  {
    props: { variant: 'blank' },
    style: ({ theme }) => ({
      border: 'none',
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,

      '&:hover': {
        backgroundColor: theme.palette.primary.contrastText
      },

      '&:disabled': {
        backgroundColor: theme.palette.primary.contrastText,
        color: smoke[500]
      }
    })
  },
  {
    props: { variant: 'inverse-outlined' },
    style: ({ theme }) => ({
      border: pxToRem(1),
      borderStyle: 'solid',
      borderColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.contrastText,

      '&:hover': {
        backgroundColor: smoke[700]
      },

      '&:disabled': {
        borderColor: smoke[500],
        color: smoke[500]
      }
    })
  },
  {
    props: { variant: 'inverse-blank' },
    style: ({ theme }) => ({
      color: theme.palette.primary.contrastText,

      '&:hover': {
        backgroundColor: smoke[700]
      },

      '&:disabled': {
        color: smoke[500]
      }
    })
  }
]

export default {
  defaultProps: {
    variant: 'contained',
    color: 'primary'
  },
  styleOverrides: {
    root: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
      borderRadius: pxToRem(BUTTON_BORDER_RADIUS)
    }
  },
  variants: [...size, ...variant]
}
