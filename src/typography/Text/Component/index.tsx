import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  BackgroundColor,
  Color,
  TextAlign,
  TextDecorationColor,
  TextDecorationLine,
  getTextDecorationLine,
  TextDecorationStyle,
  TextDecorationThickness,
  TextTransform,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from 'CSS'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Text: FC<Props> = ({
  as,
  title,
  className,

  truncate,
  background,
  color,

  align,

  overline,
  lineThrough,
  underline,
  decorationColor,
  decorationLine,
  decorationStyle,
  decorationThickness,

  uppercase,
  lowercase,
  capitalize,
  transform,

  type,
  size,
  style,
  weight,

  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  children,
}) => {
  const resolvedPaddingTop =
    PaddingTop[paddingTop] ||
    PaddingTop[paddingY] ||
    PaddingTop[padding] ||
    PaddingTop.none
  const resolvedPaddingBottom =
    PaddingBottom[paddingBottom] ||
    PaddingBottom[paddingY] ||
    PaddingBottom[padding] ||
    PaddingBottom.none
  const resolvedPaddingLeft =
    PaddingLeft[paddingLeft] ||
    PaddingLeft[paddingX] ||
    PaddingLeft[padding] ||
    PaddingLeft.none
  const resolvedPaddingRight =
    PaddingRight[paddingRight] ||
    PaddingRight[paddingX] ||
    PaddingRight[padding] ||
    PaddingRight.none

  return createElement(
    component[as] || component.span,

    {
      className: cn([
        className,
        ClassName,
        BackgroundColor[background] || BackgroundColor.default,
        Color[color] || Color.black,

        TextAlign[align] || TextAlign.left,

        TextDecorationColor[decorationColor] || TextDecorationColor.default,
        getTextDecorationLine({
          isOverLine: overline,
          isThrowLine: lineThrough,
          isUnderLine: underline,
        }),
        TextDecorationStyle[decorationStyle] || TextDecorationStyle.default,
        TextDecorationThickness[decorationThickness] ||
          TextDecorationThickness.initial,

        capitalize
          ? TextTransform.capitalize
          : uppercase
          ? TextTransform.uppercase
          : lowercase
          ? TextTransform.lowercase
          : TextTransform[transform] || TextTransform.default,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontStyle[style] || FontStyle.default,
        FontWeight[weight] || FontWeight.inherit,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,
      ]),
      title,
    },

    children
  )
}

export type { Props } from './types'

export default Text
