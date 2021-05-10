import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from '../_utils'

const Sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge']
const SIZES = tuple(...Sizes)
export type InputSizeType = typeof SIZES[number]

type Keys = 'height' | 'fontSize' | 'borderRadius' | 'borderWidth'

const map: Record<InputSizeType, Record<Keys, number | string>> = {
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

const FontSizeStyles = mapToStyles(map, (value) => ({
  fontSize: value.fontSize,
}))

export const InputFontSize: typeof FontSizeStyles & {
  default: string
} = {
  ...FontSizeStyles,
  default: FontSizeStyles['medium' as InputSizeType],
}

const Styles = mapToStyles(map, (value) => ({
  height: value.height,
  fontSize: value.fontSize,
  borderRadius: value.borderRadius,
  borderWidth: value.borderWidth,
}))

export const InputSize: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as InputSizeType],
}
