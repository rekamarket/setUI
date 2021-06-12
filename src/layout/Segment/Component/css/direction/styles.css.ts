import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'
import { GridAreaMap } from '../gridArea'

export const Keys = ['row', 'rowReverse', 'column', 'columnReverse']
const VALUES = tuple(...Keys)
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

const Styles = styleVariants(map, (value: any) => value)

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['row' as Type],
}
