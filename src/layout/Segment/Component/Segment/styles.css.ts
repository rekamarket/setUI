import { style } from '@vanilla-extract/css'
import { FontSizeMap } from 'layers/Text/font'

export const ClassName = style({
  display: 'grid',
  height: '100%',
  fontSize: FontSizeMap.LAYOUT,
})
