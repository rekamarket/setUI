import { style } from '@vanilla-extract/css'
import { FontSizeMap } from 'CSS'

export const ClassName = style({
  boxSizing: 'content-box',
  fontSize: FontSizeMap.LAYOUT,
})
