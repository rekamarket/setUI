import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  borderColor: 'none',
  borderWidth: 'none',
  borderRadius: 'none',
  weight: 'bold',
  background: 'transparent',
  color: 'black',

  // PaddingType
  paddingY: 'none',
  paddingX: 'none',
}
