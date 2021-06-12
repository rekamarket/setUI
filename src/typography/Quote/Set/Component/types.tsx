import type {
  BackgroundColorType,
  ColorType,
  DisplayType,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
  PaddingSizeType,
} from 'CSS'

export type AsType = 'q' | 'blockquote'

export type Props = {
  as?: AsType
  cite?: string
  title?: string
  className?: string
  truncate?: boolean

  background?: BackgroundColorType
  color?: ColorType
  display?: DisplayType

  borderColor?: BorderColorType
  borderRadius?: BorderRadiusType
  borderWidth?: BorderWidthType

  type?: FontFamilyType
  size?: FontSizeType
  style?: FontStyleType
  weight?: FontWeightType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}
