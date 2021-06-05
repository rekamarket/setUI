import type {
  PaddingSizeType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
  ColorType,
  TextAlignType,
  BackgroundColorType,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  DisplayType,
} from 'CSS'

export type AsType = 'code' | 'var' | 'kbd' | 'samp'

export type Props = {
  as?: AsType
  title?: string
  truncate?: boolean

  color?: ColorType
  display?: DisplayType

  align?: TextAlignType

  weight?: FontWeightType
  type?: FontFamilyType
  size?: FontSizeType
  style?: FontStyleType

  background?: BackgroundColorType

  borderColor?: BorderColorType
  borderRadius?: BorderRadiusType
  borderWidth?: BorderWidthType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}
