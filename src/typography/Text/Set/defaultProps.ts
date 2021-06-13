import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  as: 'span',

  // PaddingType
  padding: 'none',
}
