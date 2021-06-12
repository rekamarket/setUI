import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
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
const VALUES = tuple.mixed(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
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

const Styles = styleVariants(map, (value: any) => ({
  zIndex: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles[0 as Type],
}
