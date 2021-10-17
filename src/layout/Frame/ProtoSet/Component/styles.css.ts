import { style, globalStyle } from '@vanilla-extract/css'
import { CharsPerLineMap } from '../css/charsPerLine'

export const ClassName = style({
  display: 'grid',
  gridTemplateColumns: `1fr min(var(--length, ${CharsPerLineMap.large}ch), 100%) 1fr`,
})

globalStyle(`${ClassName} > *`, {
  gridColumn: 2,
})
