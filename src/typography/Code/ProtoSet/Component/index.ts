import { VFC, createElement } from 'react'
import cn from 'classnames'
import { ColorLayer, FontLayer } from 'layers'
import { Props as ProtoProps, NodeProps } from './types'
import { ClassName } from './styles.css'

type Props = ProtoProps & NodeProps

const Code: VFC<Props> = ({
  // basic
  tag,
  title,
  className,

  children,

  color,

  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,

  ...rest
}) =>
  createElement(
    tag,

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
      ...rest,
    },

    children
  )

export { mimicryAs } from './data'
export type { Props, NodeProps, Tag } from './types'
export default Code
