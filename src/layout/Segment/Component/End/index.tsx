import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  AspectRatio,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  BorderWidth,
  Gap,
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
import { tags } from './data'
import { Props } from './types'
import { ClassName } from './styles.css'

const End: VFC<Props> = ({
  as,

  aspectRatio,

  background,

  borderColor,
  borderRadius,
  borderWidth,

  gap,
  gapX,
  gapY,

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
  const resolvedGapX = Gap[gapX] || Gap[gap] || Gap.none
  const resolvedGapY = Gap[gapY] || Gap[gap] || Gap.none

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

  return createElement(
    tags[as] || tags.div,

    {
      className: cn([
        // root
        ClassName,

        // generic
        AspectRatio[aspectRatio] || AspectRatio.default,

        BackgroundColor[background] || BackgroundColor.default,

        BorderColor[borderColor] || BorderColor.default,
        BorderRadius[borderRadius] || BorderRadius.default,
        BorderWidth[borderWidth] || BorderWidth.default,

        resolvedGapX,
        resolvedGapY,

        resolvedMarginTop,
        resolvedMarginBottom,
        resolvedMarginLeft,
        resolvedMarginRight,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,

        ZIndex[zIndex] || ZIndex.default,
      ]),
    },

    children
  )
}

export type { Props } from './types'

export default End
