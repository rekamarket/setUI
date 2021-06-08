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
  PaddingType,
} from 'CSS'

export type AsType = 'code' | 'var' | 'kbd' | 'samp'

export type PropsOptional = {
  className?: string
  title?: string
}

export type Styles = {
  as?: AsType
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
}

export type { PaddingType } from 'CSS'
export type Props = PropsOptional & Styles & PaddingType
export type PropsRequired = PropsOptional & Required<Styles> & PaddingType
