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

type BasicProps = {
  className?: string
  title?: string
}

type StyleProps = {
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
export type Props = BasicProps & StyleProps & PaddingType
export type PropsRequired = BasicProps &
  Required<StyleProps> &
  Required<PaddingType>
