import { VFC, createElement } from 'react'
import cn from 'classnames'
import { InteractiveLayer, MarginLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const Button: VFC<Props> = ({
  as,
  className,
  children,

  color,
  size,
  variant,

  // margin
  marginBlockEnd,
  marginBlockStart,
  marginInlineEnd,
  marginInlineStart,
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,

        InteractiveLayer({
          color,
          size,
          variant,
        }),

        MarginLayer({
          marginBlockEnd,
          marginBlockStart,
          marginInlineEnd,
          marginInlineStart,
        }),
      ]),
    },

    children
  )

export type { Props } from './types'
export default Button
