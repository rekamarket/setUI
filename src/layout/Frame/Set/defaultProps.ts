import type { Props } from './types'

export const defaultProps: Partial<Props> = {
  color: 'black',

  fontSize: 'medium',
  fontWeight: 'regular',
  fontFamily: 'primary',
  fontStyle: 'normal',

  outline: 'none',

  textAlign: 'start',
  textDecorationColor: 'currentColor',
  textDecorationLine: 'none',
  textDecorationStyle: 'inherit',
  textDecorationThickness: 'initial',
  textTransform: 'none',

  background: 'transparent',

  borderColor: 'transparent',
  borderRadius: '0',
  borderWidth: 'none',

  // PaddingType
  padding: 'none',

  charsPerLine: 'medium',
}
