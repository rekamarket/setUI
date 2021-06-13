import type {
  PaddingSizeType,
  FontFamilyType,
  FontSizeProps,
  FontStyleProps,
  ColorProps,
  TextAlignProps,
  TextDecorationColorType,
  TextDecorationLineProps,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextTransformProps,
  BackgroundColorType,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  DisplayType,
  PaddingType,
} from 'CSS'
import { WeightType } from '../css'

export type LevelType = 1 | 2 | 3 | 4 | 5 | 6

type BasicProps = {
  level: LevelType
  className?: string
  title?: string
}

type Styles = TextTransformProps &
  TextAlignProps &
  TextDecorationLineProps &
  FontStyleProps &
  FontSizeProps &
  ColorProps &
  WeightType

type StyleProps = {
  display?: DisplayType

  weight?: WeightType

  background?: BackgroundColorType

  borderColor?: BorderColorType
  borderRadius?: BorderRadiusType
  borderWidth?: BorderWidthType
} & Styles

export type { PaddingType } from 'CSS'
export type Props = BasicProps & StyleProps & PaddingType
export type PropsRequired = BasicProps &
  Required<StyleProps> &
  Required<PaddingType>
