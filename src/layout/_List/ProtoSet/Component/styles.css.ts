import { style, globalStyle } from '@vanilla-extract/css'
import { FontSizeMap } from 'layers/Text/font'

export const ClassName = style({
  ...FontSizeMap.LAYOUT,
  display: 'grid',
  position: 'relative',
})

globalStyle(`${ClassName} li::marker`, {
  listStyleType: 'inherit',
  fontSize: 14,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
