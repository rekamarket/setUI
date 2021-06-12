import { style } from '@vanilla-extract/css'

export const ClassName = style({
  position: 'relative',
  paddingLeft: '2ch',

  ':before': {
    content: '"+"',
    position: 'absolute',
    left: 0,
    width: '2ch',
    display: 'flex',
    justifyContent: 'center',
  },
})
