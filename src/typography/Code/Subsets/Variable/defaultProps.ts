import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  borderColor: 'none',
  borderWidth: 'none',
  borderRadius: 'none',
  weight: 'bold',
  background: 'transparent',
  color: 'black',
  style: 'italic',

  // PaddingType
  paddingY: 'none',
  paddingX: 'none',
}
