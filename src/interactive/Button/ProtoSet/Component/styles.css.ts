import { style } from '@vanilla-extract/css'

export const ClassName = style({})

export const ClassNameHasIcon = style({})

export const ContentStart = style({})

export const Content = style({
  transition: 'transform .2s ease-in',

  selectors: {
    [`${ClassNameHasIcon} &`]: {
      transform: 'translateX(2ch)',
    },
  },
})
