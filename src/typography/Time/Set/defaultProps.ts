import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  color: 'black',

  fontSize: 'medium',
  fontWeight: 'normal',
  fontFamily: 'primary',
  fontStyle: 'normal',

  textDecorationColor: 'currentColor',
  textDecorationLine: 'none',
  textDecorationStyle: 'inherit',
  textDecorationThickness: 'initial',
  textTransform: 'none',
}
