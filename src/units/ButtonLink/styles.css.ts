import { style } from '@vanilla-extract/css'

export const ClassName = style({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  textDecoration: 'none',
  position: 'relative',
  ':before': {
    content: '""',
    position: 'absolute',
    top: 'calc(4% + 2px)',
    right: '4%',
    height: '20%',
    width: '2px',
    background: 'rgba(255, 255, 255, .7)',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: '4%',
    right: '4%',
    width: '20%',
    height: '2px',
    background: 'rgba(255, 255, 255, .7)',
  },
})
