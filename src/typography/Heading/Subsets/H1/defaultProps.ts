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
  charsPerLine: 'medium',
}

export const defaultProps: Partial<Props> = {
  ...basicProps,

  color: 'black',

  fontFamily: 'primary',
  fontSize: 'xxlarge',
  fontWeight: 'bold',

  margin: 'none',
  paddingX: 'none',
  paddingY: 'medium',
}
