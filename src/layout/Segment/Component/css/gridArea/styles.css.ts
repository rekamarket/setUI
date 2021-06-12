import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['start', 'interval', 'end']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  start: 'start',
  interval: 'interval',
  end: 'end',
}

const Styles = styleVariants(map, (value) => ({
  gridArea: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['interval' as Type],
}
