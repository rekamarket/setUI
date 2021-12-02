import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  color: 'black',

  fontFamily: 'primary',
  fontSize: 'medium',
  fontStyle: 'normal',
  fontWeight: 'normal',

  contentAlign: 'start',

  paddingBlockEnd: 'medium',
  paddingBlockStart: 'medium',
  paddingInlineStart: 'none',
  paddingInlineEnd: 'none',

  marginInlineStart: 'none',
  marginInlineEnd: 'none',
  marginBlockStart: 'none',
  marginBlockEnd: 'none',
}
