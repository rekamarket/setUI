import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  // flex
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  // flex values
  AlignContentMap,
  AlignItemsMap,
  FlexDirectionMap,
  FlexWrapMap,
  JustifyContentMap,

  // generic
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
import { Props } from './types'
import { ClassName } from './styles.css'

const Flex: VFC<Props> = ({
  className,
  // flex
  alignContent,
  alignItems,
  direction,
  wrap,
  justifyContent,

  // generic
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

  return (
    <div
      className={cn([
        // root
        className,
        ClassName,

        // flex
        AlignContent[alignContent] || AlignContent.default,
        AlignItems[alignItems] || AlignItems.default,
        FlexDirection[direction] || FlexDirection.default,
        FlexWrap[wrap] || FlexWrap.default,
        JustifyContent[justifyContent] || JustifyContent.default,

        // generic
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
      ])}
    >
      {children}
    </div>
  )
}

export type { Props } from './types'

export default Flex
