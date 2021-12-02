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

const Link: VFC<Props> = ({
  href,
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
    'a',
    {
      href,
      title,
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
    },
    children
  )

export type { Props } from './types'
export default Link
