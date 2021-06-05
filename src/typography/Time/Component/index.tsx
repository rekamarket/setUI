import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Color,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from 'CSS'
import { Props } from './types'
import { ClassName } from './styles.css'

const Time: FC<Props> = ({
  datetime,
  title,

  truncate,
  color,

  type,
  size,
  style,
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

  return (
    <time
      className={cn([
        ClassName,
        Color[color] || Color.grey130,

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontStyle[style] || FontStyle.default,
        FontWeight[weight] || FontWeight.default,

        resolvedPaddingTop,
        resolvedPaddingBottom,
        resolvedPaddingLeft,
        resolvedPaddingRight,
      ])}
      dateTime={datetime}
      title={title}
    >
      {children}
    </time>
  )
}

export type { Props } from './types'

export default Time
