import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'
import { map as GridAreaMap } from '../gridArea'

const Values = ['row', 'rowReverse', 'column', 'columnReverse']
const VALUES = tuple(...Values)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  row: {
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateAreas: `"${GridAreaMap.start} ${GridAreaMap.interval} ${GridAreaMap.end}"`,
  },
  rowReverse: {
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateAreas: `"${GridAreaMap.end} ${GridAreaMap.interval} ${GridAreaMap.start}"`,
  },
  column: {
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `"${GridAreaMap.start}" "${GridAreaMap.interval}" "${GridAreaMap.end}"`,
  },
  columnReverse: {
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `"${GridAreaMap.end}" "${GridAreaMap.interval}" "${GridAreaMap.start}"`,
  },
}

const Styles = mapToStyles(map, (value: any) => value)

export const Direction: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['row' as Type],
}
