import type {
  PaddingSizeType,
  TextAlignType,
  FontFamilyType,
  FontSizeType,
  FontWeightType,
  ColorType,
} from 'CSS'

export type AsType = 'span' | 'div' | 'p'

export type Props = {
  as?: AsType
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
