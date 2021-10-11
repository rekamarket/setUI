import { style, globalStyle } from '@vanilla-extract/css'
import { FontSizeMap } from 'layers/Text/font'

export const ClassName = style({
  display: 'grid',
  gridTemplateColumns: '1fr min(var(--length, 64ch), 100%) 1fr',
})

globalStyle(`${ClassName} > *`, {
  gridColumn: 2,
});