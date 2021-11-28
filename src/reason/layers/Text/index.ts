import { Color_resolve } from './Color/Color.css.gen'
import { FontFamily_resolve } from './Font/Family/FontFamily.css.gen'
import { FontSize_resolve } from './Font/Size/FontSize.css.gen'
import { FontStyle_resolve } from './Font/Style/FontStyle.css.gen'
import { FontWeight_resolve } from './Font/Weight/FontWeight.css.gen'
import { Outline_resolve } from './Outline/Outline(background-color)/Outline.css.gen'
import { SpacingAfter_resolve } from './Spacing/After/SpacingAfter.css.gen'
import { SpacingBefore_resolve } from './Spacing/Before/SpacingBefore.css.gen'
import { TextDecorationColor_resolve } from './Text/DecorationColor/TextDecorationColor.css.gen'
import { TextDecorationLine_resolve } from './Text/DecorationLine/TextDecorationLine.css.gen'
import { TextDecorationStyle_resolve } from './Text/DecorationStyle/TextDecorationStyle.css.gen'
import { TextDecorationThickness_resolve } from './Text/DecorationThickness/TextDecorationThickness.css.gen'
import { TextTransform_resolve } from './Text/Transform/TextTransform.css.gen'
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
    this.color = Color_resolve(color)
    this.fontFamily = FontFamily_resolve(fontFamily)
    this.fontSize = FontSize_resolve(fontSize)
    this.fontStyle = FontStyle_resolve(fontStyle)
    this.fontWeight = FontWeight_resolve(fontWeight)
    this.backgroundColor = Outline_resolve(backgroundColor)
    this.spacingBefore = SpacingBefore_resolve(spacingBefore)
    this.spacingAfter = SpacingAfter_resolve(spacingAfter)
    this.textDecorationColor = TextDecorationColor_resolve(textDecorationColor)
    this.textDecorationLine = TextDecorationLine_resolve(textDecorationLine)
    this.textDecorationStyle = TextDecorationStyle_resolve(textDecorationStyle)
    this.textDecorationThickness = TextDecorationThickness_resolve(
      textDecorationThickness
    )
    this.textTransform = TextTransform_resolve(textTransform)

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
