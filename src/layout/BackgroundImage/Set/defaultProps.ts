import type { Props } from './types'

export const defaultProps: Partial<Props> = {
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',

  // color
  color: 'black',

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
