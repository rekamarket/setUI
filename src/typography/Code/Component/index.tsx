import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Color,
  Display,
  TextAlign,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  BorderWidth,
} from 'CSS'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Code: FC<Props> = ({
  as,
  title,

  truncate,
  color,
  display,

  align,

  type,
  size,
  style,
  weight,

  background,

  borderColor,
  borderRadius,
  borderWidth,

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
    component[as] || component.code,

    {
      className: cn([
        ClassName,
        Display[display] || Display.inline,
        Color[color] || Color.black,

        TextAlign[align] || TextAlign.left,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontStyle[style] || FontStyle.default,
        FontWeight[weight] || FontWeight.default,

        BackgroundColor[background] || BackgroundColor.default,

        BorderColor[borderColor] || BorderColor.default,
        BorderRadius[borderRadius] || BorderRadius.default,
        BorderWidth[borderWidth] || BorderWidth.default,

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

export default Code
