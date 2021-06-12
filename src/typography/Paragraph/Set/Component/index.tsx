import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  BackgroundColor,
  Color,
  BorderColor,
  BorderRadius,
  BorderWidth,
  TextAlign,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  ZIndex,
} from 'CSS'
import { Props } from './types'
import { ClassName } from './styles.css'

const Paragraph: FC<Props> = ({
  className,

  background,
  color,

  borderColor,
  borderRadius,
  borderWidth,

  align,

  type,
  size,
  style,
  weight,

  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  zIndex,

  children,
}) => {
  const resolvedMarginTop =
    MarginTop[marginTop] ||
    MarginTop[marginY] ||
    MarginTop[margin] ||
    MarginTop.none
  const resolvedMarginBottom =
    MarginBottom[marginBottom] ||
    MarginBottom[marginY] ||
    MarginBottom[margin] ||
    MarginBottom.none
  const resolvedMarginLeft =
    MarginLeft[marginLeft] ||
    MarginLeft[marginX] ||
    MarginLeft[margin] ||
    MarginLeft.none
  const resolvedMarginRight =
    MarginRight[marginRight] ||
    MarginRight[marginX] ||
    MarginRight[margin] ||
    MarginRight.none

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

  return (
    <p
      className={cn([
        // root
        className,
        ClassName,

        BackgroundColor[background] || BackgroundColor.default,
        Color[color] || Color.black,

        BorderColor[borderColor] || BorderColor.default,
        BorderRadius[borderRadius] || BorderRadius.default,
        BorderWidth[borderWidth] || BorderWidth.default,

        TextAlign[align] || TextAlign.left,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontStyle[style] || FontStyle.default,
        FontWeight[weight] || FontWeight.inherit,

        resolvedMarginTop,
        resolvedMarginBottom,
        resolvedMarginLeft,
        resolvedMarginRight,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,

        ZIndex[zIndex] || ZIndex.default,
      ])}
    >
      {children}
    </p>
  )
}

export type { Props } from './types'

export default Paragraph
