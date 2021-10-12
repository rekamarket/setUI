import { style, globalStyle } from '@vanilla-extract/css'
import { LengthMap } from '../css/length'

export const ClassName = style({
  display: 'grid',
  gridTemplateColumns: `1fr min(var(--length, ${LengthMap.large}ch), 100%) 1fr`,
})

globalStyle(`${ClassName} > *`, {
  gridColumn: 2,
})
