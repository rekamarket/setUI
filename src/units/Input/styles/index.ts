import { style } from '@vanilla-extract/css'

//   borderBottomRightRadius: 0,
//   borderBottomLeftRadius: 0,

export const Root = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
})

export const Prefix = style({
  background: '#F3F2F1',
  color: '#605E5C',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
})

export const Suffix = style({
  background: '#F3F2F1',
  color: '#605E5C',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
})

export const Input = style({
  cursor: 'pointer',
  border: 'none',
  height: '100%',
  padding: '0 1rem',
  fontSize: 'inherit',
})
