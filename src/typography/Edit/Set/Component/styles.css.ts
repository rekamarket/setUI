import { style } from '@vanilla-extract/css'
import { DisplayMap } from 'CSS'
import { TextDecorationLineMap } from 'layers/Text/text'

export const ClassName = style({
  display: DisplayMap.block,
  textDecorationLine: TextDecorationLineMap.none,
})
