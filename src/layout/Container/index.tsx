import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Gap,
  JustifyContent,

  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  TextAlign,
  FontFamily,
  FontSize,
  BoxShadow,

  JustifyContentMap,
} from 'CSS'
import { tags } from './data'
import { Props } from './types'
import { ClassName } from './styles.css'

const Stack: FC<Props> = ({
  as,

  align,
  type,
  size,
  justifyContent,

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
        ClassName,
        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        TextAlign[align] || TextAlign.left,
        JustifyContent[justifyContent] || JustifyContent.normal,
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
      ]),
    },

    children
  )
}

export default Stack

// #todo:
// Add padding-box
// add max-width
// add centering