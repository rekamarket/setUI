import type { Props } from './types'

export const defaultProps: Omit<Props, 'children' | 'href'> = {
  color: 'primary',

  fontSize: 'medium',
  fontWeight: 'normal',
  fontFamily: 'primary',
  fontStyle: 'normal',

  textDecorationColor: 'currentColor',
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
  textDecorationThickness: 'thin',
  textTransform: 'none',
}
