import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  ColorLayer,
  TextDecorationLayer,
  FontLayer,
  TextTransformLayer,
} from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const Time: VFC<Props> = ({
  datetime,
  title,
  className,

  children,

  // text
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  textDecorationColor,
  textDecorationLine,
  textDecorationStyle,
  textDecorationThickness,
  textTransform,
}) =>
  createElement(
    'time',
    {
      className: cn([
        className,
        ClassName,

        ColorLayer({
          color,
        }),

        TextDecorationLayer({
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
        }),

        FontLayer({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }),

        TextTransformLayer({
          textTransform,
        }),
      ]),
      dateTime: datetime,
      title,
    },
    children
  )

export type { Props } from './types'
export default Time
