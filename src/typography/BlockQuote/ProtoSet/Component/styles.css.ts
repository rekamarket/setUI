import { style, globalStyle } from '@vanilla-extract/css'

export const ClassName = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
})

globalStyle(`${ClassName}::before`, {
  content: `var(--quote-symbol)`,
  fontSize: `var(--quote-size)`,
  paddingRight: `var(--quote-gap)`,
  paddingLeft: `var(--quote-gap)`,
})
