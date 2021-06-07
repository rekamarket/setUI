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
  as?: AsType
  className?: string
  title?: string
}

export type StyleRequired = {
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

export type PropsRequired = Required<StyleRequired> & PaddingType

export type Props = PropsOptional & StyleRequired & PaddingType
