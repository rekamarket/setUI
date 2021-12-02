import { VFC, createElement } from 'react'
import cn from 'classnames'
import { ColorLayer, FontLayer } from 'layers'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Text: VFC<Props> = ({
  // basic
  as,
  title,
  className,

  children,

  color,

  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,

        ColorLayer({
          color,
        }),

        FontLayer({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }),
      ]),
      title,
    },

    children
  )

export type { Props } from './types'
export default Text
