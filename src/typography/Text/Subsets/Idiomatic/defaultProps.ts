import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  color: 'black',

  weight: 'bold',
  type: 'monospace',
  size: 'xsmall',
  style: 'italic',

  background: 'transparent',

  // PaddingType
  padding: 'none',
}
