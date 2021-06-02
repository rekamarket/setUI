import { FC } from 'react'
import cn from 'classnames'
import { TabPane } from 'rc-tabs'
import {
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

const Component: FC<Props> = ({
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

  ...props
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
    <TabPane
      className={cn([
        ClassName,
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
    />
  )
}

export default Component
