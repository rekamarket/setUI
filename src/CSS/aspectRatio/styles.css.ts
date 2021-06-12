import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'content',
  '1x1',
  '9x16',
  '4x3',
  'auto',
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  content: 'attr(width) / attr(height)',
  '1x1': '1 / 1',
  '16x9': '16 / 9',
  '4x3': '4 / 3',
  auto: 'auto',
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value: any) => ({
  aspectRatio: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['auto' as Type],
}
