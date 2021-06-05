import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Color,
  BackgroundColor,
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

const Edit: FC<Props> = ({
  as,
  cite,
  datetime,
  className,

  truncate,
  background,
  color,

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
    component[as] || component.ins,

    {
      className: cn([
        className,
        ClassName,
        Color[color] || Color.grey130,
        BackgroundColor[background] || BackgroundColor.default,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontWeight[weight] || FontWeight.default,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,
      ]),
      cite,
      datetime,
    },

    children
  )
}

export type { Props } from './types'

export default Edit
