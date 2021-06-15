import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Keyword values */
  'max-content',
  'min-content',
  'auto',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  /* Keyword values */
  maxContent: 'max-content',
  minContent: 'min-content',
  auto: 'auto',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = styleVariants(map, (value: any) => ({
  width: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['auto' as Type],
  initial: Styles['auto' as Type],
}
