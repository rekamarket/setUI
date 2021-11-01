import { globalStyle, style } from '@vanilla-extract/css'

export const ClassName = style({
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)',
  alignItems: 'stretch',
})

globalStyle(`${ClassName} > *:first-child`, {
  gridRow: '1 / 3',
  gridColumn: '1 / 2',
})
