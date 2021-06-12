import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['start', 'end', 'left', 'right', 'center']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  start: 'start',
  end: 'end',
  left: 'left',
  right: 'right',
  center: 'center',
}

const Styles = mapToStyles(map, (value: any) => ({
  textAlign: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['start' as Type],
}
