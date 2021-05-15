import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['start', 'end', 'left', 'right', 'center']
const VALUES = tuple(...Values)
export type TextAlignType = typeof VALUES[number]

const map: Record<TextAlignType, any> = {
  start: 'start',
  end: 'end',
  left: 'left',
  right: 'right',
  center: 'center',
}

const Styles = mapToStyles(map, (value: any) => ({
  textAlign: value,
}))

export const TextAlign: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['start' as TextAlignType],
}
