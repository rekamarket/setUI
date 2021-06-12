import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  color: 'black',

  weight: 'bold',
  type: 'monospace',
  size: 'medium',
  style: 'normal',

  background: 'transparent',

  borderColor: 'transparent',
  borderRadius: '0',
  borderWidth: 'none',

  // PaddingType
  padding: 'none',
}
