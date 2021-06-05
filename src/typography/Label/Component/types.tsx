import type {
  PaddingSizeType,
  FontFamilyType,
  FontSizeType,
  FontWeightType,
  ColorType,
  TextAlignType,
  TextTransformType,
} from 'CSS'

export type AsType = 'label' | 'legend'

export type Props = {
  as?: AsType
  title?: string
  for?: string
  truncate?: boolean

  color?: ColorType

  align?: TextAlignType

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
