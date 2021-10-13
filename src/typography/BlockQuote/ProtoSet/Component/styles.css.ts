import { style } from '@vanilla-extract/css'

export const ClassName = style({
  display: 'grid',
  gridTemplateAreas: `'before content after'`,
  gridArea: 'content',

  selectors: {
    '&:before': {
      gridArea: 'before',
      content: 'var(--symbol)',
      paddingRight: 'var(--symbol-gap)',
      fontSize: 'var(--symbol-size)',
      lineHeight: 1,
      marginTop: '-0.1309em',
    },
  },
})
