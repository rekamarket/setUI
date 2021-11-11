import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['xsmall', 'small', 'medium', 'large', 'xlarge']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties =
  | 'height'
  | 'fontSize'
  | 'borderWidth'
  | 'outlineWidth'
  | 'outlineOffset'
  | 'paddingRight'
  | 'paddingLeft'

export const map: Record<Type, Record<Properties, number | string>> = {
  xsmall: {
    height: 24,
    fontSize: 14,
    borderWidth: 24 / 16,
    outlineWidth: 24 / 16,
    outlineOffset: (24 / 8) * -1,
    paddingRight: 24,
    paddingLeft: 24,
  },
  small: {
    height: 36,
    fontSize: 36 / 2,
    borderWidth: 36 / 16,
    outlineWidth: 36 / 16,
    outlineOffset: (36 / 8) * -1,
    paddingRight: 36,
    paddingLeft: 36,
  },
  medium: {
    height: 48,
    fontSize: 20,
    borderWidth: 48 / 16,
    outlineWidth: 48 / 16,
    outlineOffset: (48 / 8) * -1,
    paddingRight: 48,
    paddingLeft: 48,
  },
  large: {
    height: 60,
    fontSize: 60 / 2,
    borderWidth: 60 / 16,
    outlineWidth: 60 / 16,
    outlineOffset: (60 / 8) * -1,
    paddingRight: 60,
    paddingLeft: 60,
  },
  xlarge: {
    height: 72,
    fontSize: 72 / 2,
    borderWidth: 72 / 16,
    outlineWidth: 72 / 16,
    outlineOffset: (72 / 8) * -1,
    paddingRight: 72,
    paddingLeft: 72,
  },
}

const Styles = styleVariants(map, (value) => ({
  '--size': value.height,
  height: value.height,
  fontSize: value.fontSize,
  borderWidth: value.borderWidth,
  outlineWidth: value.outlineWidth,
  outlineOffset: value.outlineOffset,
  lineHeight: 1,
  paddingRight: value.paddingRight,
  paddingLeft: value.paddingLeft,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
}
