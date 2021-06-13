import type {
  BackgroundColorType,
  ColorType,
  FontFamilyType,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  TextAlignProps,
  TextAlignType,
  TextDecorationColorType,
  TextDecorationLineProps,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextTransformType,
  TransformPropsType,
  PaddingSizeType,
  PaddingType,
} from 'CSS'

export type AsType =
  | 'span'
  | 'strong'
  | 'em'
  | 'i'
  | 'b'
  | 'dfn'
  | 'abbr'
  | 'sup'
  | 'sub'
  | 'mark'
  | 'cite'
  | 'u'
  | 's'
  | 'small'

type BasicProps = {
  as: AsType
  className?: string
  title?: string
}

type StyleProps = {
  background?: BackgroundColorType
  color?: ColorType

  decorationColor?: TextDecorationColorType
  decorationStyle?: TextDecorationStyleType
  decorationThickness?: TextDecorationThicknessType

  transform?: TextTransformType

  type?: FontFamilyType
} & TransformPropsType &
  TextAlignProps &
  TextDecorationLineProps &
  FontWeightProps &
  FontStyleProps &
  FontSizeProps

export type { PaddingType } from 'CSS'
export type Props = BasicProps & StyleProps & PaddingType
export type PropsRequired = BasicProps &
  Required<StyleProps> &
  Required<PaddingType>
