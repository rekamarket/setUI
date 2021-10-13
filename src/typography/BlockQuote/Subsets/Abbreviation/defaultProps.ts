import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  style: 'italic',

  decorationLine: 'underline',
  decorationStyle: 'dotted',
  decorationThickness: 2,
  weight: 'thin',

  // PaddingType
  padding: 'none',
}
