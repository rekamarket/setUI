import { globalStyle, style } from '@vanilla-extract/css'

export const ClassName = style({})

globalStyle(`${ClassName} > *`, {
  borderWidth: '0',
})

globalStyle(`${ClassName} > * + *`, {
  borderLeftWidth: 'calc(var(--size) / 16)',
})

globalStyle(`${ClassName} > *:first-child`, {
  borderTopLeftRadius: 'inherit',
  borderBottomLeftRadius: 'inherit',
})

globalStyle(`${ClassName} > *:last-child`, {
  borderTopRightRadius: 'inherit',
  borderBottomRightRadius: 'inherit',
})
