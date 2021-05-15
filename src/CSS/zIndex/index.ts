import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = [
  0,
  1,
  2,
  'dropdownBackdrop',
  'dropdown',
  'sticky',
  'modalBackdrop',
  'modal',
  'notification',
]
const VALUES = tuple.mixed(...Values)
export type ZIndexType = typeof VALUES[number]

export const map: Record<ZIndexType, any> = {
  0: 0,
  1: 1,
  2: 2,
  dropdownBackdrop: 8,
  dropdown: 16,
  sticky: 32,
  modalBackdrop: 64,
  modal: 128,
  notification: 256,
}

const Styles = mapToStyles(map, (value: any) => ({
  zIndex: value,
}))

export const ZIndex: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles[0 as ZIndexType],
}
