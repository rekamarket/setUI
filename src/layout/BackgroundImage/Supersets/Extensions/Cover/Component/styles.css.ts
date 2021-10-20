import { style } from '@vanilla-extract/css'

export const ClassName = style({
  position: 'relative',
  zIndex: 1,

  selectors: {
    '&:before': {
      content: `""`,
      backgroundColor: `var(--overlay-color)`,
      opacity: 0.35,
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: -1,
    },
  },
})
