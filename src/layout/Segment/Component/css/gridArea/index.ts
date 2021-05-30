import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['start', 'interval', 'end']
const VALUES = tuple(...Values)
type GridAreaType = typeof VALUES[number]

export const map: Record<GridAreaType, string> = {
  start: 'start',
  interval: 'interval',
  end: 'end',
}

const Styles = mapToStyles(map, (value) => ({
  gridArea: value,
}))

export const GridArea: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['interval' as GridAreaType],
}

export type Type = GridAreaType
