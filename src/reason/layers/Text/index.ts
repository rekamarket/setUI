import { ColorStyle_resolve } from './Color/ColorStyle.css.gen'
import { FontFamilyStyle_resolve } from './Font/Family/FontFamilyStyle.css.gen'
import { FontSizeStyle_resolve } from './Font/Size/FontSizeStyle.css.gen'
import { FontStyleStyle_resolve } from './Font/Style/FontStyleStyle.css.gen'
import { FontWeightStyle_resolve } from './Font/Weight/FontWeightStyle.css.gen'
import { OutlineStyle_resolve } from './Outline/Outline(background-color)/OutlineStyle.css.gen'
import { SpacingAfterStyle_resolve } from './Spacing/After(padding-inline-end)/SpacingAfterStyle.css.gen'
import { SpacingBeforeStyle_resolve } from './Spacing/Before(padding-inline-start)/SpacingBeforeStyle.css.gen'
import { TextDecorationColorStyle_resolve } from './Text/DecorationColor/TextDecorationColorStyle.css.gen'
import { TextDecorationLineStyle_resolve } from './Text/DecorationLine/TextDecorationLineStyle.css.gen'
import { TextDecorationStyleStyle_resolve } from './Text/DecorationStyle/TextDecorationStyleStyle.css.gen'
import { TextDecorationThicknessStyle_resolve } from './Text/DecorationThickness/TextDecorationThicknessStyle.css.gen'
import { TextTransformStyle_resolve } from './Text/Transform/TextTransformStyle.css.gen'
import type { Props } from './types'

class TextLayer {
  color: string
  fontFamily: string
  fontSize: string
  fontStyle: string
  fontWeight: string
  backgroundColor: string
  spacingBefore: string
  spacingAfter: string
  textDecorationColor: string
  textDecorationLine: string
  textDecorationStyle: string
  textDecorationThickness: string
  textTransform: string

  resolve({
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    backgroundColor,
    spacingBefore,
    spacingAfter,
    textDecorationColor,
    textDecorationLine,
    textDecorationStyle,
    textDecorationThickness,
    textTransform,
  }: Props) {
    this.color = ColorStyle_resolve(color)
    this.fontFamily = FontFamilyStyle_resolve(fontFamily)
    this.fontSize = FontSizeStyle_resolve(fontSize)
    this.fontStyle = FontStyleStyle_resolve(fontStyle)
    this.fontWeight = FontWeightStyle_resolve(fontWeight)
    this.backgroundColor = OutlineStyle_resolve(backgroundColor)
    this.spacingBefore = SpacingBeforeStyle_resolve(spacingBefore)
    this.spacingAfter = SpacingAfterStyle_resolve(spacingAfter)
    this.textDecorationColor =
      TextDecorationColorStyle_resolve(textDecorationColor)
    this.textDecorationLine =
      TextDecorationLineStyle_resolve(textDecorationLine)
    this.textDecorationStyle =
      TextDecorationStyleStyle_resolve(textDecorationStyle)
    this.textDecorationThickness = TextDecorationThicknessStyle_resolve(
      textDecorationThickness
    )
    this.textTransform = TextTransformStyle_resolve(textTransform)

    return [
      this.color,
      this.fontFamily,
      this.fontSize,
      this.fontStyle,
      this.fontWeight,
      this.backgroundColor,
      this.spacingBefore,
      this.spacingAfter,
      this.textDecorationColor,
      this.textDecorationLine,
      this.textDecorationStyle,
      this.textDecorationThickness,
      this.textTransform,
    ]
      .filter(Boolean)
      .join(' ')
  }
}

export type { Props } from './types'
export default TextLayer
