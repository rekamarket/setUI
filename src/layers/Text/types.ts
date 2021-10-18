import { ColorProps } from './color'
import {
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
} from './font'
import { OutlineProps } from './outline'
import {
  TextDecorationColorProps,
  TextDecorationLineProps,
  TextDecorationStyleProps,
  TextDecorationThicknessProps,
  TextTransformProps,
} from './text'

type FontProps = FontFamilyProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps
type TextProps = TextDecorationColorProps &
  TextDecorationLineProps &
  TextDecorationStyleProps &
  TextDecorationThicknessProps &
  TextTransformProps

export type Props = ColorProps & FontProps & OutlineProps & TextProps

export type ConfigOverride = {
  fontWeight?: {
    resolver: () => string
    Style: any
  }
}

export type { ColorType } from './color'
export type {
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
} from './font'
export type { OutlineType } from './outline'
export type {
  TextDecorationColorType,
  TextDecorationLineType,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextTransformType,
} from './text'
