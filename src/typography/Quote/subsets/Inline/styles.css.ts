import { style } from '@vanilla-extract/css'

export const ClassName = style({
  ':before': {
    content: `'"'`,
  },
  ':after': {
    content: `'"'`,
  },
})
