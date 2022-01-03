import type { PureRepresentation } from '../types'

export const defaultProps: PureRepresentation = {
  charsPerLine: 'none',

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

  // textOverflow
  hyphens: 'none',
  overflowWrap: 'normal',
  textOverflow: 'initial',
  wordBreak: 'breakWord',
}
