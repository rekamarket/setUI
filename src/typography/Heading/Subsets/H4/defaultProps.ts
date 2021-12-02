import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  charsPerLine: 'medium',

  // color
  color: 'black',

  // font
  fontFamily: 'primary',
  fontSize: 'medium',
  fontStyle: 'normal',
  fontWeight: 'bold',

  // text
  textTransform: 'none',

  // content
  contentAlign: 'start',

  // margin
  marginBlockEnd: 'none',
  marginBlockStart: 'none',
  marginInlineEnd: 'none',
  marginInlineStart: 'none',

  // padding
  paddingBlockEnd: 'medium',
  paddingBlockStart: 'medium',
  paddingInlineEnd: 'none',
  paddingInlineStart: 'none',
}
