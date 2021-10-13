import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  color: 'black',

  weight: 'bold',
  type: 'monospace',
  size: 'xsmall',
  style: 'normal',

  background: 'transparent',

  decorationColor: 'error',
  decorationLine: 'underline',
  decorationStyle: 'wavy',
  decorationThickness: 'light',

  // PaddingType
  padding: 'none',
}
