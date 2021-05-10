import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from '../_utils'

const Sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge']
const SIZES = tuple(...Sizes)
export type InputSizeType = typeof SIZES[number]

type Keys = 'height' | 'fontSize' | 'borderRadius' | 'borderWidth' | 'padding'

const map: Record<InputSizeType, Record<Keys, number | string>> = {
  xsmall: {
    height: 24,
    fontSize: 14,
    borderRadius: 24 / 16,
    borderWidth: 24 / 16,
    padding: `${24 / 8}px ${24 / 3}px`,
  },
  small: {
    height: 36,
    fontSize: 36 / 2,
    borderRadius: 36 / 16,
    borderWidth: 36 / 16,
    padding: `${36 / 8}px ${36 / 3}px`,
  },
  medium: {
    height: 48,
    fontSize: 20,
    borderRadius: 48 / 16,
    borderWidth: 48 / 16,
    padding: `${48 / 8}px ${48 / 3}px`,
  },
  large: {
    height: 60,
    fontSize: 60 / 2,
    borderRadius: 60 / 16,
    borderWidth: 60 / 16,
    padding: `${60 / 8}px ${60 / 3}px`,
  },
  xlarge: {
    height: 72,
    fontSize: 72 / 2,
    borderRadius: 72 / 16,
    borderWidth: 72 / 16,
    padding: `${72 / 8}px ${72 / 3}px`,
  },
}

const Styles = mapToStyles(map, (value) => ({
  height: value.height,
  fontSize: value.fontSize,
  borderRadius: value.borderRadius,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderWidth: value.borderWidth,
  padding: value.padding,
  lineHeight: 1,
}))

export const InputSize: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as InputSizeType],
}
