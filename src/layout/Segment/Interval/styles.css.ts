import { style } from '@vanilla-extract/css'
import { GridAreaMap } from '../css'

export const ClassName = style({
  display: 'grid',
  gridArea: GridAreaMap.interval,
})
