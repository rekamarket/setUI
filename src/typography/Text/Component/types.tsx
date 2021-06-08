import type {
  BackgroundColorType,
  ColorType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
  TextAlignType,
  TextDecorationColorType,
  TextDecorationLineType,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextTransformType,
  PaddingSizeType,
} from 'CSS'

export type AsType =
  | 'span'
  | 'div'
  | 'p'
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

export type Props = {
  as?: AsType
  title?: string
  className?: string
  truncate?: boolean

  background?: BackgroundColorType
  color?: ColorType

  align?: TextAlignType

  overline?: boolean
  lineThrough?: boolean
  underline?: boolean
  decorationColor?: TextDecorationColorType
  decorationLine?: TextDecorationLineType
  decorationStyle?: TextDecorationStyleType
  decorationThickness?: TextDecorationThicknessType

  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean
  transform?: TextTransformType

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
