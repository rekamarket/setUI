import { style } from '@vanilla-extract/css'

//   borderBottomRightRadius: 0,
//   borderBottomLeftRadius: 0,

export const Root = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateAreas: '"prefix input suffix"',
  alignItems: 'center',
})

export const Prefix = style({
  gridArea: 'prefix',
  background: '#F3F2F1',
  color: '#605E5C',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
})

export const Suffix = style({
  gridArea: 'suffix',
  background: '#F3F2F1',
  color: '#605E5C',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
})

export const Input = style({
  gridArea: 'input',
  cursor: 'pointer',
  border: 'none',
  height: '100%',
  padding: '0 1rem',
  fontSize: 'inherit',
})
