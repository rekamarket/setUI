import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  ThemeColorLayer,
  InteractiveLayer,
  CornerLayer,
  MarginLayer,
} from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const Button: VFC<Props> = ({
  as,
  className,
  children,

  color,

  interactiveShape,
  interactiveSize,
  interactiveVariant,

  cornerRadius,

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

        ThemeColorLayer({
          color,
        }),

        InteractiveLayer({
          interactiveShape,
          interactiveSize,
          interactiveVariant,
        }),

        CornerLayer({
          cornerRadius,
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
