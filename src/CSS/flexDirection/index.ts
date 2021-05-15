import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['row', 'rowReverse', 'column', 'columnReverse']
const VALUES = tuple(...Values)
type Type = typeof VALUES[number]

const map: Record<Type, any> = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
}

const Styles = mapToStyles(map, (value: any) => ({
  flexDirection: value,
}))

export const FlexDirection: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['row' as Type],
}

export type FlexDirectionType = Type
