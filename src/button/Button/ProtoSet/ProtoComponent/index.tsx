import { VFC, createElement } from 'react'
import cn from 'classnames'
import { ButtonLayer } from 'layers'
import { TextTransform } from 'layers/Text/text'
import { Props } from './types'
import { ClassName } from './styles.css'

const button = new ButtonLayer()

const ProtoComponent: VFC<Props> = ({
  disabled,
  className,
  transform,
  children,
  ...rest
}) =>
  createElement(
    'button',

    {
      className: cn([
        ClassName,
        className,
        button.set(rest).box,
        TextTransform[transform],
      ]),

      disabled,

      ...('onClick' in rest ? { type: 'button' } : {}),
      ...rest,
    },

    children
  )

export type { Props } from './types'
export default ProtoComponent
