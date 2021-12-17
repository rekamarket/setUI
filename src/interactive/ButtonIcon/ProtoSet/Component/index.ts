import { VFC, createElement } from 'react'
import cn from 'classnames'
import { ButtonLayer, MarginLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const Button: VFC<Props> = ({
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

  ...rest
}) =>
  createElement(
    'button',

    {
      className: cn([
        className,
        ClassName,

        ButtonLayer({
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
      ...rest,
    },

    children
  )

export type { Props, NodeProps } from './types'
export default Button
