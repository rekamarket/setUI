import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Keyword values */
  'left',
  'right',
  'center',
  'justify',
  'justifyAll',
  'start',
  'end',
  'matchParent',

  /* Character-based alignment in a table column */
  'dot',
  'dotCenter',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  /* Keyword values */
  left: 'left',
  right: 'right',
  center: 'center',
  justify: 'justify',
  justifyAll: 'justify-all',
  start: 'start',
  end: 'end',
  matchParent: 'match-parent',

  /* Character-based alignment in a table column */
  dot: '"."',
  dotCenter: '"." center',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = styleVariants(map, (value: any) => ({
  textAlign: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['start' as Type],
  initial: Styles['start' as Type],
}
