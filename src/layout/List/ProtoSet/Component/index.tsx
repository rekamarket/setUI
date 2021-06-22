import React, { VFC, Children, createElement } from 'react'
import cn from 'classnames'
import {
  // flex
  AlignContent,
  AlignItems,
  FlexWrap,
  JustifyContent,
  // flex values
  AlignContentMap,
  AlignItemsMap,
  FlexDirectionMap,
  FlexWrapMap,
  JustifyContentMap,

  // generic
  backgroundResolve,
  BackgroundOpacity,
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
  Width,
} from 'CSS'
import {
  directionResolve,
  dividerColorResolve,
  dividerWeightResolve,
} from '../css'
import { displayName as dividerName } from '../SubComponents/Divider'
import { component } from './data'
import { Props, PropsRequired } from './types'
import { ClassName } from './styles.css'

const Flex: VFC<PropsRequired> = ({
  as,
  value,
  className,
  // flex
  alignContent,
  alignItems,
  wrap,
  justifyContent,

  // generic
  opacity,
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
  width,

  children,

  ...rest
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
    component[as],

    {
      className: cn([
        // root
        className,
        ClassName,

        // flex
        directionResolve<Partial<PropsRequired>>(rest),
        AlignContent[alignContent] || AlignContent.default,
        AlignItems[alignItems] || AlignItems.default,
        FlexWrap[wrap] || FlexWrap.default,
        JustifyContent[justifyContent] || JustifyContent.default,

        // generic
        backgroundResolve<Partial<PropsRequired>>(rest),
        BackgroundOpacity[opacity] || BackgroundOpacity.default,

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
        Width[width] || Width.default,

        dividerColorResolve<Partial<PropsRequired>>(rest),
        dividerWeightResolve<Partial<PropsRequired>>(rest),
      ]),
    },

    Children.map(children, (child, i) => {
      if (child.type.displayName === dividerName) {
        return child
      }
      return <li {...(i === 0 && value ? { value } : {})}>{child}</li>
    })
  )
}

export type { Props, PropsRequired } from './types'

export default Flex
