import { style } from '@vanilla-extract/css'

export const ClassName = style({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'stretch',
  fontSize: 'var(--font-size)',
  paddingBlock: '0',
  paddingInline: 'var(--spacing-inline)',
  gridTemplateColumns:
    'min-content var(--gap-overlap) auto var(--gap-overlap) min-content',
})

export const RootStart = style({})

export const RootEnd = style({})

export const RootHasIcon = style({})

export const RootLoading = style({})

export const Loader = style({
  opacity: '0',
  transition: 'opacity 0.2s ease-in 0.2s',

  selectors: {
    [`${RootLoading} &`]: {
      opacity: '1',
    },
  },
})

export const ContentStart = style({
  gridColumn: '1 / 3',
  gridRow: '1',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    [`${RootHasIcon} &`]: {
      transform: 'translateX(calc(var(--gap-overlap) * -0.75))',
    },
    [`${RootLoading} &`]: {
      transform: 'translateX(calc(var(--gap-overlap) * -0.75))',
    },
  },
})

export const Content = style({
  paddingBlock: 'var(--spacing-block)',
  gridColumn: '2 / 5',
  gridRow: '1',
  transition: 'transform .2s ease-in',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    [`${RootStart} &`]: {
      transform: 'translateX(calc(var(--gap-overlap) * 0.75))',
    },

    [`${RootEnd} &`]: {
      transform: 'translateX(calc(var(--gap-overlap) * -0.75))',
    },
  },
})

export const ContentEnd = style({
  gridColumn: '4 / 6',
  gridRow: '1',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    [`${RootHasIcon} &`]: {
      transform: 'translateX(calc(var(--gap-overlap) * 0.75))',
    },
    [`${RootLoading} &`]: {
      transform: 'translateX(calc(var(--gap-overlap) * 0.75))',
    },
  },
})
