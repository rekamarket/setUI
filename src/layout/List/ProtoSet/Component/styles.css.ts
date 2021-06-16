import { style, globalStyle } from '@vanilla-extract/css'
import { FontSizeMap } from 'CSS'

export const ClassName = style({
  display: 'flex',
  fontSize: FontSizeMap.LAYOUT,
  position: 'relative',
  overflow: 'hidden',
})

globalStyle(`${ClassName} > li`, {
  position: 'relative',
})

globalStyle(`${ClassName} > li > *`, {
  width: '100%',
})

globalStyle(`${ClassName} > li + li:before`, {
  content: '""',
  position: 'absolute',
  width: 'var(--divider-width)',
  height: 'var(--divider-height)',
  top: 'var(--divider-top)',
  bottom: 'var(--divider-bottom)',
  left: 'var(--divider-left)',
  backgroundColor: 'var(--divider-color)',
})
