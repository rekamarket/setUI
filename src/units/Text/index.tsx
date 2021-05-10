import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles'
import {
  Color,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  TextAlign,
  FontFamily,
  FontSize,
  BoxShadow,
} from '../../theme'

const Text: FC<Props> = ({
  as,
  weight,
  truncate,
  color,
  align,
  type,
  size,
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
    component[as] || component.p,

    {
      className: cn([
        ClassName,
        Color[color] || Color.grey130,
        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        TextAlign[align] || TextAlign.left,
        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,
      ]),
    },

    children
  )
}

export default Text
