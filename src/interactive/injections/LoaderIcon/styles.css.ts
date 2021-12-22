import { keyframes, style } from '@vanilla-extract/css'

const rotate = keyframes({
  to: { transform: 'rotate(360deg)' },
})

export const ClassName = style({
  display: 'inline-block',
  animation: `1s infinite ${rotate} linear`,
})
