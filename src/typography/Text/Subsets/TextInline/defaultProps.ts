import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  color: 'black',
  fontFamily: 'primary',
  fontSize: 'medium',
  fontStyle: 'normal',
  fontWeight: 'normal',
}
