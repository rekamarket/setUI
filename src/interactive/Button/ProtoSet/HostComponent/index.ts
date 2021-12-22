import { VFC, createElement, cloneElement } from 'react'
import cn from 'classnames'
import { ButtonLayer, MarginLayer } from 'layers'
import { Props } from './types'
import { ClassName, ContentStart, Content, ContentEnd } from './styles.css'

const Host: VFC<Props> = ({
  className,
  children,

  slotStart,
  slotMiddle,
  slotEnd,

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

    [
      slotStart &&
        cloneElement(slotStart, {
          key: 'ContentStart',
          className: cn(ContentStart, slotStart.props.className),
        }),

      slotMiddle
        ? cloneElement(
            slotMiddle,
            {
              key: 'Content',
              className: cn(Content, slotMiddle.props.className),
            },
            children
          )
        : children,

      slotEnd &&
        cloneElement(slotEnd, {
          key: 'ContentEnd',
          className: cn(ContentEnd, slotEnd.props.className),
        }),
    ]
  )

export type { Props, NodeProps } from './types'
export default Host
