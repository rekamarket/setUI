import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['xsmall', 'small', 'medium', 'large', 'xlarge']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties = 'height' | 'fontSize' | 'borderRadius' | 'borderWidth'

export const map: Record<Type, Record<Properties, number | string>> = {
  xsmall: {
    height: 24,
    fontSize: 14,
    borderRadius: 24 / 16,
    borderWidth: 1,
  },
  small: {
    height: 36,
    fontSize: 36 / 2,
    borderRadius: 36 / 16,
    borderWidth: 1,
  },
  medium: {
    height: 48,
    fontSize: 20,
    borderRadius: 48 / 16,
    borderWidth: 2,
  },
  large: {
    height: 60,
    fontSize: 60 / 2,
    borderRadius: 60 / 16,
    borderWidth: 3,
  },
  xlarge: {
    height: 72,
    fontSize: 72 / 2,
    borderRadius: 72 / 16,
    borderWidth: 3,
  },
}

const FontSizeStyles = styleVariants(map, (value) => ({
  fontSize: value.fontSize,
}))

export const FontSize: typeof FontSizeStyles & {
  default: string
} = {
  ...FontSizeStyles,
  default: FontSizeStyles['medium' as Type],
}

const Styles = styleVariants(map, (value) => ({
  height: value.height,
  fontSize: value.fontSize,
  borderRadius: value.borderRadius,
  borderWidth: value.borderWidth,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
}
