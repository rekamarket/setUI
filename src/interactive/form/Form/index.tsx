import { FC } from 'react'
import cn from 'classnames'
import FormRC from 'rc-field-form'
import Item from './Item'
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Gap,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from 'CSS'
import { Props } from './types'
import { ClassName } from './styles.css'

interface I<T = unknown> extends FC<T> {
  Field: typeof Item
}

const Form: I<Props> = ({
  alignContent,
  alignItems,
  direction,
  wrap,
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
  ...props
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
    <FormRC
      className={cn([
        ClassName,
        AlignContent[alignContent] || AlignContent.default,
        AlignItems[alignItems] || AlignItems.default,
        FlexDirection[direction] || FlexDirection.default,
        FlexWrap[wrap] || FlexWrap.default,
        JustifyContent[justifyContent] || JustifyContent.default,
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
      ])}
      {...props}
    >
      {children}
    </FormRC>
  )
}

Form.Field = Item

export default Form
