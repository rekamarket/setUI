import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  color: 'primary',

  cornerRadius: 'small',

  interactiveShape: 'rect',
  interactiveSize: 'medium',
  interactiveVariant: 'solid',

  marginInlineStart: 'none',
  marginInlineEnd: 'none',
  marginBlockStart: 'none',
  marginBlockEnd: 'none',
}
