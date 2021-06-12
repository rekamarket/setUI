import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['row', 'rowReverse', 'column', 'columnReverse']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
}

const Styles = styleVariants(map, (value: any) => ({
  flexDirection: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['row' as Type],
}
