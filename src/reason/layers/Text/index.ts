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

import type {
  Config,
  ColorProps,
  FontProps,
  OutlineProps,
  SpacingProps,
  TextProps,
  Props,
  PropsWithCFOST,
  PropsWithFOST,
  PropsWithCOST,
  PropsWithCFST,
  PropsWithCFOT,
  PropsWithCFOS,
  PropsWithOST,
  PropsWithFST,
  PropsWithFOT,
  PropsWithFOS,
  PropsWithCST,
  PropsWithCOT,
  PropsWithCOS,
  PropsWithCFT,
  PropsWithCFS,
  PropsWithCFO,
  PropsWithST,
  PropsWithOT,
  PropsWithOS,
  PropsWithFT,
  PropsWithFS,
  PropsWithFO,
  PropsWithCT,
  PropsWithCF,
  PropsWithCS,
} from './types'

class TextLayer {
  // color
  color: (props?: ColorProps) => string
  colorCSS: string

  // font
  font: (props?: FontProps) => string
  fontFamily: string
  fontSize: string
  fontStyle: string
  fontWeight: string

  // outline
  outline: (props?: OutlineProps) => string
  backgroundColor: string

  // spacing
  spacing: (props?: SpacingProps) => string
  spacingBefore: string
  spacingAfter: string

  // text
  text: (props?: TextProps) => string
  textDecorationColor: string
  textDecorationLine: string
  textDecorationStyle: string
  textDecorationThickness: string
  textTransform: string

  // resolve
  resolve: (props?: Props) => string

  constructor(config?: Config) {
    this.color = () => ''
    this.font = () => ''
    this.outline = () => ''
    this.spacing = () => ''
    this.text = () => ''

    if ('useColor' in config) {
      this.color = ({ color }) =>
        [ColorStyle_resolve(color)].filter(Boolean).join(' ')
    }

    if ('useFont' in config) {
      this.font = ({ fontFamily, fontSize, fontStyle, fontWeight }) =>
        [
          FontFamilyStyle_resolve(fontFamily),
          FontSizeStyle_resolve(fontSize),
          FontStyleStyle_resolve(fontStyle),
          FontWeightStyle_resolve(fontWeight),
        ]
          .filter(Boolean)
          .join(' ')
    }

    if ('useOutline' in config) {
      this.outline = ({ backgroundColor }) =>
        [OutlineStyle_resolve(backgroundColor)].filter(Boolean).join(' ')
    }

    if ('useSpacing' in config) {
      this.spacing = ({ spacingBefore, spacingAfter }) =>
        [
          SpacingBeforeStyle_resolve(spacingBefore),
          SpacingAfterStyle_resolve(spacingAfter),
        ]
          .filter(Boolean)
          .join(' ')
    }

    if ('useText' in config) {
      this.text = ({
        textDecorationColor,
        textDecorationLine,
        textDecorationStyle,
        textDecorationThickness,
        textTransform,
      }) =>
        [
          TextDecorationColorStyle_resolve(textDecorationColor),
          TextDecorationLineStyle_resolve(textDecorationLine),
          TextDecorationStyleStyle_resolve(textDecorationStyle),
          TextDecorationThicknessStyle_resolve(textDecorationThickness),
          TextTransformStyle_resolve(textTransform),
        ]
          .filter(Boolean)
          .join(' ')
    }

    switch (true) {
      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
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
        }: PropsWithCFOST) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
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
        }: PropsWithFOST) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          color,
          backgroundColor,
          spacingBefore,
          spacingAfter,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithCOST) =>
          [
            this.color({ color }),
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          spacingBefore,
          spacingAfter,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithCFST) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          backgroundColor,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithCFOT) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          backgroundColor,
          spacingBefore,
          spacingAfter,
        }: PropsWithCFOS) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          backgroundColor,
          spacingBefore,
          spacingAfter,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithOST) =>
          [
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          spacingBefore,
          spacingAfter,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithFST) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          backgroundColor,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithFOT) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          backgroundColor,
          spacingBefore,
          spacingAfter,
        }: PropsWithFOS) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          color,
          spacingBefore,
          spacingAfter,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithCST) =>
          [
            this.color({ color }),
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          color,
          backgroundColor,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithCOT) =>
          [
            this.color({ color }),
            this.outline({ backgroundColor }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          color,
          backgroundColor,
          spacingBefore,
          spacingAfter,
        }: PropsWithCOS) =>
          [
            this.color({ color }),
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithCFT) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          spacingBefore,
          spacingAfter,
        }: PropsWithCFS) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.spacing({ spacingBefore, spacingAfter }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          backgroundColor,
        }: PropsWithCFO) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          spacingBefore,
          spacingAfter,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithST) =>
          [
            this.spacing({ spacingBefore, spacingAfter }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          backgroundColor,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithOT) =>
          [
            this.outline({ backgroundColor }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          backgroundColor,
          spacingBefore,
          spacingAfter,
        }: PropsWithOS) =>
          [
            this.outline({ backgroundColor }),
            this.spacing({ spacingBefore, spacingAfter }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: PropsWithFT) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          spacingBefore,
          spacingAfter,
        }: PropsWithFS) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.spacing({ spacingBefore, spacingAfter }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          backgroundColor,
        }: PropsWithFO) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
            this.outline({ backgroundColor }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }: PropsWithCF) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          color,
          spacingBefore,
          spacingAfter,
        }: PropsWithCS) =>
          [this.color({ color }), this.spacing({ spacingBefore, spacingAfter })]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          color,
          backgroundColor,
        }: PropsWithCO) =>
          [this.color({ color }), this.outline({ backgroundColor })]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }: PropsWithCF) =>
          [
            this.color({ color }),
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        config.useText: {
        this.resolve = ({
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }: TextProps) =>
          [
            this.text({
              textDecorationColor,
              textDecorationLine,
              textDecorationStyle,
              textDecorationThickness,
              textTransform,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({ spacingBefore, spacingAfter }: SpacingProps) =>
          [this.spacing({ spacingBefore, spacingAfter })]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({ backgroundColor }: OutlineProps) =>
          [this.outline({ backgroundColor })].filter(Boolean).join(' ')
      }

      case 'useColor' in config &&
        !config.useColor &&
        'useFont' in config &&
        config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }: FontProps) =>
          [
            this.font({
              fontFamily,
              fontSize,
              fontStyle,
              fontWeight,
            }),
          ]
            .filter(Boolean)
            .join(' ')
      }

      case 'useColor' in config &&
        config.useColor &&
        'useFont' in config &&
        !config.useFont &&
        'useOutline' in config &&
        !config.useOutline &&
        'useSpacing' in config &&
        !config.useSpacing &&
        'useText' in config &&
        !config.useText: {
        this.resolve = ({ color }: ColorProps) =>
          [this.color({ color })].filter(Boolean).join(' ')
      }

      default: {
        this.resolve = () => ''
      }
    }
  }
}

export type {
  ColorProps,
  FontProps,
  OutlineProps,
  SpacingProps,
  TextProps,
  Props,
  PropsWithCFOST,
  PropsWithFOST,
  PropsWithCOST,
  PropsWithCFST,
  PropsWithCFOT,
  PropsWithCFOS,
  PropsWithOST,
  PropsWithFST,
  PropsWithFOT,
  PropsWithFOS,
  PropsWithCST,
  PropsWithCOT,
  PropsWithCOS,
  PropsWithCFT,
  PropsWithCFS,
  PropsWithCFO,
  PropsWithST,
  PropsWithOT,
  PropsWithOS,
  PropsWithFT,
  PropsWithFS,
  PropsWithFO,
  PropsWithCT,
  PropsWithCF,
  PropsWithCS,
} from './types'
export default TextLayer
