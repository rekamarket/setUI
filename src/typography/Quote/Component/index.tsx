import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  BackgroundColor,
  Color,
  Display,
  BorderColor,
  BorderRadius,
  BorderWidth,
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

const Quote: FC<Props> = ({
  as,
  cite,
  title,
  className,

  background,
  color,
  display,

  borderColor,
  borderRadius,
  borderWidth,

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
    component[as] || component.q,

    {
      className: cn([
        className,
        ClassName,

        Display[display] || Display.inline,
        Color[color] || Color.black,
        BackgroundColor[background] || BackgroundColor.default,

        BorderColor[borderColor] || BorderColor.default,
        BorderRadius[borderRadius] || BorderRadius.default,
        BorderWidth[borderWidth] || BorderWidth.default,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontStyle[style] || FontStyle.default,
        FontWeight[weight] || FontWeight.default,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,
      ]),
      cite,
      title,
    },

    children
  )
}

export type { Props } from './types'

export default Quote
