import type { Props } from './types'

export const basicProps: Partial<Props> = {
  fontFamily: 'primary',
  fontStyle: 'normal',

  outline: 'none',

  textAlign: 'start',
  textDecorationColor: 'currentColor',
  textDecorationLine: 'none',
  textDecorationStyle: 'inherit',
  textDecorationThickness: 'initial',
  textTransform: 'none',
  paddingX: 'none',
  paddingY: 'medium',
}

export const defaultProps: Partial<Props> = {
  ...basicProps,
  as: 'p',

  color: 'black',

  fontSize: 'medium',
  fontWeight: 'regular',
}
