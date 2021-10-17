import type { Props } from './types'

export const basicProps: Partial<Props> = {
  fontStyle: 'normal',

  outline: 'none',

  textAlign: 'start',
  textDecorationColor: 'currentColor',
  textDecorationLine: 'none',
  textDecorationStyle: 'inherit',
  textDecorationThickness: 'initial',
  textTransform: 'none',
}

export const defaultProps: Partial<Props> = {
  ...basicProps,

  color: 'black',

  fontFamily: 'primary',
  fontSize: 'large',
  fontWeight: 'bold',

  padding: 'none',
}
