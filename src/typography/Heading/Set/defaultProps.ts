import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  charsPerLine: 'medium',

  // color
  color: 'black',

  // font
  fontFamily: 'primary',
  fontSize: 'xxxlarge',
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
  paddingInlineStart: 'none',
  paddingInlineEnd: 'none',
}
