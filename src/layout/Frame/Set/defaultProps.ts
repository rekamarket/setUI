import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  maxInlineSize: 'large',
  color: 'black',
  contentAlign: 'start',

  fontSize: 'medium',
  fontWeight: 'normal',
  fontFamily: 'primary',
  fontStyle: 'normal',

  marginBlockEnd: 'none',
  marginBlockStart: 'none',
  marginInlineEnd: 'none',
  marginInlineStart: 'none',

  paddingBlockEnd: 'none',
  paddingBlockStart: 'none',
  paddingInlineEnd: 'none',
  paddingInlineStart: 'none',
}
