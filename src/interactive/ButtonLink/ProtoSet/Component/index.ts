import { VFC, createElement } from 'react'
import cn from 'classnames'
import { ButtonLinkLayer, MarginLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const ButtonLink: VFC<Props> = ({
  className,
  href,
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
    'a',

    {
      href,
      className: cn([
        className,
        ClassName,

        ButtonLinkLayer({
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
export default ButtonLink
