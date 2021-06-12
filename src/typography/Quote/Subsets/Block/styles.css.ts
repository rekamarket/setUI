import { style } from '@vanilla-extract/css'

export const P = style({
  ':before': {
    content: `'"'`,
  },
  ':after': {
    content: `'"'`,
  },
})
