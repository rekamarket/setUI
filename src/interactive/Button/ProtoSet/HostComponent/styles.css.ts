import { style } from '@vanilla-extract/css'

export const ClassName = style({
  fontWeight: 700,
  textTransform: 'uppercase',
  fontFamily: `'Montserrat', Arial, sans-serif`,
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--gap)',
})

export const ContentStart = style({
  ':empty': {
    display: 'contents',
  },
})

export const Content = style({
  ':empty': {
    display: 'contents',
  },
})

export const ContentEnd = style({
  ':empty': {
    display: 'contents',
  },
})
