import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  color: 'primary',

  size: 'medium',
  variant: 'solid',

  marginInlineStart: 'none',
  marginInlineEnd: 'none',
  marginBlockStart: 'none',
  marginBlockEnd: 'none',
}
