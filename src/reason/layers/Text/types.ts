import { IColorStyle_i } from './Color/ColorStyle.css.gen'
import { IFontFamilyStyle_i } from './Font/Family/FontFamilyStyle.css.gen'
import { IFontSizeStyle_i } from './Font/Size/FontSizeStyle.css.gen'
import { IFontStyleStyle_i } from './Font/Style/FontStyleStyle.css.gen'
import { IFontWeightStyle_i } from './Font/Weight/FontWeightStyle.css.gen'
import { IOutlineStyle_i } from './Outline/Outline(background-color)/OutlineStyle.css.gen'
import { ISpacingAfterStyle_i } from './Spacing/After(padding-inline-end)/SpacingAfterStyle.css.gen'
import { ISpacingBeforeStyle_i } from './Spacing/Before(padding-inline-start)/SpacingBeforeStyle.css.gen'
import { ITextDecorationColorStyle_i } from './Text/DecorationColor/TextDecorationColorStyle.css.gen'
import { ITextDecorationLineStyle_i } from './Text/DecorationLine/TextDecorationLineStyle.css.gen'
import { ITextDecorationStyleStyle_i } from './Text/DecorationStyle/TextDecorationStyleStyle.css.gen'
import { ITextDecorationThicknessStyle_i } from './Text/DecorationThickness/TextDecorationThicknessStyle.css.gen'
import { ITextTransformStyle_i } from './Text/Transform/TextTransformStyle.css.gen'

export type ColorProps = IColorStyle_i

export type FontProps = IFontFamilyStyle_i &
  IFontSizeStyle_i &
  IFontStyleStyle_i &
  IFontWeightStyle_i

export type OutlineProps = IOutlineStyle_i

export type SpacingProps = ISpacingAfterStyle_i & ISpacingBeforeStyle_i

export type TextProps = ITextDecorationColorStyle_i &
  ITextDecorationLineStyle_i &
  ITextDecorationStyleStyle_i &
  ITextDecorationThicknessStyle_i &
  ITextTransformStyle_i

export type PropsWithCFOST = ColorProps & FontProps & OutlineProps & SpacingProps & TextProps

export type PropsWithFOST = FontProps & OutlineProps & SpacingProps & TextProps

export type PropsWithCOST = ColorProps & OutlineProps & SpacingProps & TextProps

export type PropsWithCFST = ColorProps & FontProps & SpacingProps & TextProps

export type PropsWithCFOT = ColorProps & FontProps & OutlineProps & TextProps

export type PropsWithCFOS = ColorProps & FontProps & OutlineProps & SpacingProps

export type PropsWithOST = OutlineProps & SpacingProps & TextProps

export type PropsWithFST = FontProps & SpacingProps & TextProps

export type PropsWithFOT = FontProps & OutlineProps & TextProps

export type PropsWithFOS = FontProps & OutlineProps & SpacingProps

export type PropsWithCST = ColorProps & SpacingProps & TextProps

export type PropsWithCOT = ColorProps & OutlineProps & TextProps

export type PropsWithCOS = ColorProps & OutlineProps & SpacingProps

export type PropsWithCFT = ColorProps & FontProps & TextProps

export type PropsWithCFS = ColorProps & FontProps & SpacingProps

export type PropsWithCFO = ColorProps & FontProps & OutlineProps

export type PropsWithST = SpacingProps & TextProps

export type PropsWithOT = OutlineProps & TextProps

export type PropsWithOS = OutlineProps & SpacingProps

export type PropsWithFT = FontProps & TextProps

export type PropsWithFS = FontProps & SpacingProps

export type PropsWithFO = FontProps & OutlineProps

export type PropsWithCT = ColorProps & TextProps

export type PropsWithCF = ColorProps & FontProps

export type PropsWithCS = ColorProps & SpacingProps

export type Props =
  | PropsWithCFOST
  | PropsWithFOST
  | PropsWithCOST
  | PropsWithCFST
  | PropsWithCFOT
  | PropsWithCFOS
  | PropsWithOST
  | PropsWithFST
  | PropsWithFOT
  | PropsWithFOS
  | PropsWithCST
  | PropsWithCOT
  | PropsWithCOS
  | PropsWithCFT
  | PropsWithCFS
  | PropsWithCFO
  | PropsWithST
  | PropsWithOT
  | PropsWithOS
  | PropsWithFT
  | PropsWithFS
  | PropsWithFO
  | PropsWithCT
  | PropsWithCF
  | PropsWithCS
  | TextProps
  | SpacingProps
  | OutlineProps
  | FontProps
  | ColorProps

export interface Config {
  useColor?: boolean
  useFont?: boolean
  useOutline?: boolean
  useSpacing?: boolean
  useText?: boolean
}
