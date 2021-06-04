import type {
  PaddingSizeType,
  FontFamilyType,
  FontSizeType,
  FontWeightType,
  ColorType,
  TextAlignType,
  TextDecorationType,
  TextTransformType,
} from 'CSS'

export type AsType =
  | 'span'
  | 'div'
  | 'p'
  | 'strong'
  | 'em'
  | 'i'
  | 'b'
  | 'dfn'
  | 'abbr'
  | 'sup'
  | 'sub'
  | 'samp'
  | 'code'
  | 'time'
  | 'var'

export type Props = {
  as?: AsType
  title?: string
  truncate?: boolean

  color?: ColorType

  align?: TextAlignType

  underline?: boolean
  lineThrough?: boolean
  decoration?: TextDecorationType

  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean
  transform?: TextTransformType

  weight?: FontWeightType
  type?: FontFamilyType
  size?: FontSizeType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}
