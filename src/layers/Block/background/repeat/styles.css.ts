import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'repeatX',
  'repeatY',
  'repeat',
  'space',
  'round',
  'noRepeat',

  /* Two-value syntax: horizontal | vertical */
  'repeat_Space',
  'repeat_Repeat',
  'round_Space',
  'noRepeat_Round',

  /* Global values */
  'inherit',
  'initial',
  'revert',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  repeatX: 'repeat-x',
  repeatY: 'repeat-y',
  repeat: 'repeat',
  space: 'space',
  round: 'round',
  noRepeat: 'no-repeat',

  /* Two-value syntax: horizontal | vertical */
  repeat_Space: 'repeat space',
  repeat_Repeat: 'repeat repeat',
  round_Space: 'round space',
  noRepeat_Round: 'no-repeat round',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
}

const Styles = styleVariants(map, (value) => ({
  backgroundRepeat: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  initial: Styles['repeat' as Type],
  default: Styles['no-repeat' as Type],
}
