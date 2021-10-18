import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['row', 'rowReverse', 'column', 'columnReverse']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties =
  | 'flexDirection'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'dividerWidth'
  | 'dividerHeight'
type Values = string
type Value = {
  [key in Properties]: Values
}

export const map: Record<Type, Record<Properties, Values>> = {
  row: {
    flexDirection: 'row',
    top: '-100%',
    bottom: '-100%',
    left: 'calc((var(--gap) + var(--divider-weight))/-2)',
    right: 'unset',
    dividerWidth: 'var(--divider-weight)',
    dividerHeight: 'unset',
  },
  rowReverse: {
    flexDirection: 'row',
    top: '-100%',
    bottom: '-100%',
    left: 'calc((var(--gap) + var(--divider-weight))/-2)',
    right: 'unset',
    dividerWidth: 'var(--divider-weight)',
    dividerHeight: 'unset',
  },
  column: {
    flexDirection: 'column',
    top: 'calc(var(--gap)/-2)',
    bottom: 'unset',
    left: '-100%',
    right: '-100%',
    dividerWidth: '300%',
    dividerHeight: 'var(--divider-weight)',
  },
  columnReverse: {
    flexDirection: 'column',
    top: 'calc(var(--gap)/-2)',
    bottom: 'unset',
    left: '-100%',
    right: '-100%',
    dividerWidth: '300%',
    dividerHeight: 'var(--divider-weight)',
  },
}

const Styles = styleVariants(map, (value: any) => ({
  flexDirection: value.flexDirection,
  '--divider-top': value.top,
  '--divider-bottom': value.bottom,
  '--divider-left': value.left,
  '--divider-width': value.dividerWidth,
  '--divider-height': value.dividerHeight,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['row' as Type],
}
