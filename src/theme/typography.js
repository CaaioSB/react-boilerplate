import { pxToRem } from 'utils/styles'

export const typography = {
  fontFamily: '"Open Sans", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 600,
  h1: {
    fontSize: pxToRem(60),
    lineHeight: 1.2,
    fontWeight: 400
  },
  h2: {
    fontSize: pxToRem(44),
    lineHeight: 1.5,
    fontWeight: 400
  },
  h3: {
    fontSize: pxToRem(36),
    lineHeight: 1.5,
    fontWeight: 400
  },
  h4: {
    fontSize: pxToRem(28),
    lineHeight: 1.5,
    fontWeight: 400
  },
  h5: {
    fontSize: pxToRem(24),
    lineHeight: 1.5,
    fontWeight: 400
  },
  h6: {
    fontSize: pxToRem(20),
    lineHeight: 1.5,
    fontWeight: 400
  },
  subtitle1: {
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    fontWeight: 400
  },
  subtitle2: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
    fontWeight: 400
  },
  body1: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
    fontWeight: 400
  },
  body2: {
    fontSize: pxToRem(14),
    lineHeight: 1.5,
    fontWeight: 400
  },
  button: {
    fontSize: pxToRem(14),
    lineHeight: 1.5,
    fontWeight: 600,
    textTransform: 'none'
  },
  caption: {
    fontSize: pxToRem(12),
    lineHeight: 1.5,
    fontWeight: 400
  },
  overline: {
    fontSize: pxToRem(10),
    lineHeight: 1.5,
    fontWeight: 400
  }
}

export default { typography }
