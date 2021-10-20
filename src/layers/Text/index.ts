import { Color, colorResolve } from './color'
import {
  FontFamily,
  fontFamilyResolve,
  FontSize,
  fontSizeResolve,
  FontStyle,
  fontStyleResolve,
  FontWeight,
  fontWeightResolve,
} from './font'
import { Outline, outlineResolve } from './outline'
import {
  TextDecorationColor,
  textDecorationColorResolve,
  TextDecorationLine,
  textDecorationLineResolve,
  TextDecorationStyle,
  textDecorationStyleResolve,
  TextDecorationThickness,
  textDecorationThicknessResolve,
  TextTransform,
  textTransformResolve,
} from './text'
import type {
  ConfigOverride,
  Props,
  ColorType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
  OutlineType,
  TextDecorationColorType,
  TextDecorationLineType,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextTransformType,
} from './types'

class TextLayer {
  // color
  CSScolor: ColorType

  // font
  CSSfontFamily: FontFamilyType
  CSSfontSize: FontSizeType
  CSSfontStyle: FontStyleType
  CSSfontWeight: FontWeightType
  FontWeight: Record<string, string>
  fontWeightResolve: <T>(props: T) => string

  // outline
  CSSoutline: OutlineType

  // text
  CSStextDecorationColor: TextDecorationColorType
  CSStextDecorationLine: TextDecorationLineType
  CSStextDecorationStyle: TextDecorationStyleType
  CSStextDecorationThickness: TextDecorationThicknessType
  CSStextTransform: TextTransformType

  constructor(config?: ConfigOverride) {
    if (config && 'fontWeight' in config) {
      this.fontWeightResolve = config.fontWeight.resolver
      this.FontWeight = config.fontWeight.Style
    } else {
      this.fontWeightResolve = fontWeightResolve
      this.FontWeight = FontWeight
    }
  }

  public set(props: Props) {
    // color
    this.CSScolor = colorResolve<Props>(props)

    // font
    this.CSSfontFamily = fontFamilyResolve<Props>(props)
    this.CSSfontSize = fontSizeResolve<Props>(props)
    this.CSSfontStyle = fontStyleResolve<Props>(props)
    this.CSSfontWeight = this.fontWeightResolve<Props>(props)

    // outline
    this.CSSoutline = outlineResolve<Props>(props)

    // text
    this.CSStextDecorationColor = textDecorationColorResolve<Props>(props)
    this.CSStextDecorationLine = textDecorationLineResolve<Props>(props)
    this.CSStextDecorationStyle = textDecorationStyleResolve<Props>(props)
    this.CSStextDecorationThickness =
      textDecorationThicknessResolve<Props>(props)
    this.CSStextTransform = textTransformResolve<Props>(props)

    return this
  }

  public get color() {
    return Color[this.CSScolor]
  }

  public get font() {
    return [
      FontFamily[this.CSSfontFamily],
      FontSize[this.CSSfontSize],
      FontStyle[this.CSSfontStyle],
      this.FontWeight[this.CSSfontWeight],
    ]
      .filter(Boolean)
      .join(' ')
  }

  public get outline() {
    return Outline[this.CSSoutline]
  }

  public get text() {
    return [
      TextDecorationColor[this.CSStextDecorationColor],
      TextDecorationLine[this.CSStextDecorationLine],
      TextDecorationStyle[this.CSStextDecorationStyle],
      TextDecorationThickness[this.CSStextDecorationThickness],
      TextTransform[this.CSStextTransform],
    ]
      .filter(Boolean)
      .join(' ')
  }

  public get box() {
    return [this.color, this.font, this.outline, this.text]
      .filter(Boolean)
      .join(' ')
  }
}

export { useColor, ColorContext, ColorKeys } from './color'
export {
  FontFamilyKeys,
  FontSizeKeys,
  useFontSize,
  FontSizeContext,
  FontStyleKeys,
  FontWeightKeys,
} from './font'
export { OutlineKeys } from './outline'
export {
  TextDecorationColorKeys,
  TextDecorationLineKeys,
  TextDecorationStyleKeys,
  TextDecorationThicknessKeys,
  TextTransformKeys,
} from './text'
export {
  argTypes,
  colorArgTypes,
  fontArgTypes,
  outlineArgTypes,
  textArgTypes,
} from './storybook'
export type { Props } from './types'
export default TextLayer
