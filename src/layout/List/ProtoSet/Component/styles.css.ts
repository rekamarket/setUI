import { style, globalStyle } from '@vanilla-extract/css'
// import { FontSizeMap } from 'layers/Text/font'

export const ClassName = style({
  // ...FontSizeMap.LAYOUT,
  display: 'grid',
  position: 'relative',
})

globalStyle(`${ClassName} li`, {
  display: 'flex',
  alignItems: 'flex-start',
  listStyleType: 'none',
})

globalStyle(`${ClassName} li::before`, {
  content: `var(--marker-symbol)`,
  fontSize: `var(--marker-size)`,
  paddingRight: `var(--marker-gap)`,
  paddingLeft: `var(--marker-gap)`,
})

globalStyle(`${ClassName} li::marker`, {
  display: 'none',
})
