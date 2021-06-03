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

export type AsType = 'span' | 'div' | 'p' | 'strong' | 'em' | 'i'

export type Props = {
  as?: AsType
  truncate?: boolean

  color?: ColorType

  align?: TextAlignType
  decoration?: TextDecorationType
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
