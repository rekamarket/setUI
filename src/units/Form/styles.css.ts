import { style } from '@vanilla-extract/css'

export const ClassName = style({
  display: 'flex',
})

export const Label = style({
  display: 'block',
  position: 'relative',
  paddingBottom: '1em',
  marginBottom: '.5em',
})

export const Title = style({
  color: '#201F1E',
  fontSize: 'smaller',
  lineHeight: 1.42,
})

export const Error = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '1em',
  color: '#A4262C',
  fontSize: '.8em',
  display: 'flex',
  alignItems: 'flex-end',
})
