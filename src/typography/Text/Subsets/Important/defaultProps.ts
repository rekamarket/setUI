import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  fontFamily: 'primary',
  fontStyle: 'normal',
  fontSize: 'medium',
  fontWeight: 'bold',
  color: 'black',
}
