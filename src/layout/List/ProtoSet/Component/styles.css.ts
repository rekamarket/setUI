import { style } from '@vanilla-extract/css'
import { FontSizeMap } from 'layers/Text/font'

export const ClassName = style({
  display: 'flex',
  fontSize: FontSizeMap.LAYOUT,
  position: 'relative',
  overflow: 'hidden',
})
