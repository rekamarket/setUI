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

export type Props = {
  datetime: string
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
