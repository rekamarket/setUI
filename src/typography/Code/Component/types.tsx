import type {
  PaddingSizeType,
  FontFamilyType,
  FontSizeType,
  FontWeightType,
  ColorType,
  TextAlignType,
} from 'CSS'

export type AsType = 'code' | 'var' | 'kbd' | 'samp'

export type Props = {
  as?: AsType
  title?: string
  truncate?: boolean

  color?: ColorType

  align?: TextAlignType

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
