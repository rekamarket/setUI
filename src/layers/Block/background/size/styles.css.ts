import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Keyword values */
  'cover',
  'contain',

  /* One-value syntax */
  50,
  'auto',

  /* Global values */
  'inherit',
  'initial',
  'revert',
  'unset',
]
const VALUES = tuple.mixed(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  /* Keyword values */
  cover: 'cover',
  contain: 'contain',

  /* One-value syntax */
  50: '50%',
  auto: 'auto',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
}

const Styles = styleVariants(map, (value) => ({
  backgroundSize: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  initial: Styles['auto' as Type],
  default: Styles['auto' as Type],
}
