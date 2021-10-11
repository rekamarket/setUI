import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Keyword values */
  'scroll',
  'fixed',
  'local',

  /* Global values */
  'inherit',
  'initial',
  'revert',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  /* Keyword values */
  scroll: 'scroll',
  fixed: 'fixed',
  local: 'local',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
}

const Styles = styleVariants(map, (value) => ({
  backgroundAttachment: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  initial: Styles['scroll' as Type],
  default: Styles['scroll' as Type],
}
