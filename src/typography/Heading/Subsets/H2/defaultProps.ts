import type { Props } from './types'

export const basicProps: Partial<Props> = {
  fontStyle: 'normal',

  outline: 'none',

  textAlign: 'inherit',
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
  fontSize: 'xlarge',
  fontWeight: 'bold',

  margin: 'none',
  padding: 'none',
}
