import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  as: 'code',
  borderColor: 'none',
  borderWidth: 'none',
  borderRadius: 'none',
  weight: 'normal',
  color: 'black',
  background: 'grey10',

  // PaddingType
  padding: 'none',
}
