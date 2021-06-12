import { style } from '@vanilla-extract/css'
import { DisplayMap, TextDecorationLineMap } from 'CSS'

export const ClassName = style({
  display: DisplayMap.block,
  textDecorationLine: TextDecorationLineMap.none,
})
