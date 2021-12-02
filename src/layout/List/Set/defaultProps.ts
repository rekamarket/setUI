import type { Props } from './types'

export const defaultProps: Omit<Props, 'children'> = {
  // flex
  alignContent: 'center',
  alignItems: 'stretch',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: 'xxxsmall',
  justifyContent: 'start',

  // marker
  markerGap: 'xxsmall',
  markerPosition: 'outside',
  markerSize: 'medium',
  markerSymbol: 'bullet',

  // color
  color: 'black',

  // font
  fontFamily: 'primary',
  fontSize: 'medium',
  fontStyle: 'normal',
  fontWeight: 'normal',

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
