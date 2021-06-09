import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  borderColor: 'none',
  borderWidth: 'none',
  borderRadius: 'none',
  color: 'black',
  background: 'grey10',
  weight: 'bold',

  // PaddingType
  padding: 'none',
}
