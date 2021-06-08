import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  borderColor: 'none',
  borderWidth: 'none',
  borderRadius: 'none',
  weight: 'normal',
  color: 'black',
  background: 'grey10',

  // PaddingType
  paddingY: 'none',
  paddingX: 'xxsmall',
}
