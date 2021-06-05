import { style } from '@vanilla-extract/css'
import { DisplayMap, TextDecorationMap } from 'CSS'

export const ClassName = style({
  display: DisplayMap.block,
  textDecoration: TextDecorationMap.none,
})
