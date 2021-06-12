import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  background: 'success',
  color: 'white',

  weight: 'bold',
  type: 'monospace',
  size: 'xsmall',
  style: 'normal',

  // PaddingType
  padding: 'none',
}
