import type {
  PaddingSizeType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  ColorType,
  TextAlignType,
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
  className?: string
  title?: string
}

type StyleProps = {
  level: LevelType

  color?: ColorType
  display?: DisplayType

  align?: TextAlignType

  weight?: WeightType
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
