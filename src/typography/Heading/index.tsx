import { FC, createElement } from 'react'
import cn from 'classnames'
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
} from 'theme'
import { Props } from './types'
import { headers } from './data'
import { ClassName } from './styles.css'

const Heading: FC<Props> = ({
  level,
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
    headers[level] || headers[3],

    {
      className: cn([
        ClassName,
        Color[color] || Color.default,
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

export default Heading
