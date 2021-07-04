import { style } from '@vanilla-extract/css'
import { FontSizeMap } from 'layers/Text/font'

export const ClassName = style({
  boxSizing: 'content-box',
  fontSize: FontSizeMap.LAYOUT,
})
