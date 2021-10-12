import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['inside', 'outside']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  inside: 'inside',
  outside: 'outside',
}

const Styles = styleVariants(map, (value) => ({
  listStylePosition: value as any,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['inside' as Type],
  initial: Styles['outside' as Type],
}
