import { style } from '@vanilla-extract/css'

export const ClassName = style({
  wordBreak: 'break-all',

  selectors: {
    '&::before': {
      content: `""`,
      marginBottom: '-0.0085em',
      display: 'table',
    },
    '&::after': {
      content: `""`,
      marginTop: '0.0085em',
      display: 'table',
    },
  },
})
