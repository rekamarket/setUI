import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge']
const SIZES = tuple(...Sizes)
export type ButtonSizeType = typeof SIZES[number]

type Keys =
  | 'height'
  | 'fontSize'
  | 'borderRadius'
  | 'borderWidth'
  | 'padding'
  | 'outlineWidth'
  | 'outlineOffset'

const map: Record<ButtonSizeType, Record<Keys, number | string>> = {
  xsmall: {
    height: 24,
    fontSize: 14,
    borderRadius: 24 / 16,
    borderWidth: 24 / 16,
    padding: `${24 / 8}px ${24 / 2}px`,
    outlineWidth: 24 / 16,
    outlineOffset: (24 / 8) * -1,
  },
  small: {
    height: 36,
    fontSize: 36 / 2,
    borderRadius: 36 / 16,
    borderWidth: 36 / 16,
    padding: `${36 / 8}px ${36 / 2}px`,
    outlineWidth: 36 / 16,
    outlineOffset: (36 / 8) * -1,
  },
  medium: {
    height: 48,
    fontSize: 20,
    borderRadius: 48 / 16,
    borderWidth: 48 / 16,
    padding: `${48 / 8}px ${48 / 2}px`,
    outlineWidth: 48 / 16,
    outlineOffset: (48 / 8) * -1,
  },
  large: {
    height: 60,
    fontSize: 60 / 2,
    borderRadius: 60 / 16,
    borderWidth: 60 / 16,
    padding: `${60 / 8}px ${60 / 2}px`,
    outlineWidth: 60 / 16,
    outlineOffset: (60 / 8) * -1,
  },
  xlarge: {
    height: 72,
    fontSize: 72 / 2,
    borderRadius: 72 / 16,
    borderWidth: 72 / 16,
    padding: `${72 / 8}px ${72 / 2}px`,
    outlineWidth: 72 / 16,
    outlineOffset: (72 / 8) * -1,
  },
}

const Styles = mapToStyles(map, (value) => ({
  height: value.height,
  fontSize: value.fontSize,
  borderRadius: value.borderRadius,
  borderWidth: value.borderWidth,
  padding: value.padding,
  outlineWidth: value.outlineWidth,
  outlineOffset: value.outlineOffset,
  lineHeight: 1,
}))

export const ButtonSize: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as ButtonSizeType],
}
