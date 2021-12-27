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

  paddingBlockEnd: 'medium',
  paddingBlockStart: 'medium',
  paddingInlineEnd: 'medium',
  paddingInlineStart: 'medium',
}
