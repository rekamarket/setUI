import { style } from '@vanilla-extract/css'
import { FontSizeMap } from 'CSS'
import { GridAreaMap } from '../css'

export const ClassName = style({
  display: 'grid',
  gridArea: GridAreaMap.start,
  fontSize: FontSizeMap.LAYOUT,
})
