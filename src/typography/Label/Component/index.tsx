import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Color,
  TextAlign,
  TextDecoration,
  TextTransform,
  FontFamily,
  FontWeight,
  FontSize,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from 'CSS'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Label: FC<Props> = ({
  as,
  title,
  for: forAttribute,

  truncate,
  color,

  align,

  underline,
  lineThrough,
  decoration,

  uppercase,
  lowercase,
  capitalize,
  transform,

  type,
  size,
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
    component[as] || component.label,

    {
      className: cn([
        ClassName,
        Color[color] || Color.grey130,

        TextAlign[align] || TextAlign.left,

        underline
          ? TextDecoration.underline
          : lineThrough
          ? TextDecoration.lineThrough
          : TextDecoration[decoration] || TextDecoration.default,

        capitalize
          ? TextTransform.capitalize
          : uppercase
          ? TextTransform.uppercase
          : lowercase
          ? TextTransform.lowercase
          : TextTransform[transform] || TextTransform.default,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontWeight[weight] || FontWeight.default,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,
      ]),
      for: forAttribute,
      title,
    },

    children
  )
}

export type { Props } from './types'

export default Label
