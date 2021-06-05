import type {
  BackgroundColorType,
  ColorType,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  TextAlignType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
  MarginSizeType,
  PaddingSizeType,
  ZIndexType,
} from 'CSS'

export type Props = {
  className?: string

  background?: BackgroundColorType
  color?: ColorType

  borderColor?: BorderColorType
  borderRadius?: BorderRadiusType
  borderWidth?: BorderWidthType

  align?: TextAlignType

  type?: FontFamilyType
  size?: FontSizeType
  style?: FontStyleType
  weight?: FontWeightType

  margin?: MarginSizeType
  marginX?: MarginSizeType
  marginY?: MarginSizeType
  marginTop?: MarginSizeType
  marginRight?: MarginSizeType
  marginBottom?: MarginSizeType
  marginLeft?: MarginSizeType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType

  zIndex?: ZIndexType
}
