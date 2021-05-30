import { style } from '@vanilla-extract/css'

export const Sentence = style({
  border: 'none !important',
  fontFamily: 'monospace',
  verticalAlign: 'bottom',
  letterSpacing: -1,
  position: 'relative',
})

export const Letter = style({
  border: 'none !important',
  position: 'relative',
  bottom: 5,
})
