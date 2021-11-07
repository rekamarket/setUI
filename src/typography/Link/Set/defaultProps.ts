import type { Props } from './types'

export const basicProps: Partial<Props> = {
  fontFamily: 'primary',
  fontStyle: 'normal',

  outline: 'none',

  textDecorationColor: 'currentColor',
  textDecorationLine: 'none',
  textDecorationStyle: 'inherit',
  textDecorationThickness: 'initial',
  textTransform: 'none',
}

export const defaultProps: Partial<Props> = {
  ...basicProps,

  color: 'black',
  fontSize: 'medium',
  fontWeight: 'regular',
}
