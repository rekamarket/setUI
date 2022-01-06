import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  ContentLayer,
  MarginLayer,
  PaddingLayer,
  ColorLayer,
  FontLayer,
  LineClampLayer,
} from 'layers'
import { Props as ProtoProps, NodeProps } from './types'
import { ClassName } from './styles.css'

type Props = ProtoProps & NodeProps

const ProtoComponent: VFC<Props> = ({
  tag,
  className,
  children,

  // text
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,

  // content
  contentAlign,

  // margin
  marginBlockEnd,
  marginBlockStart,
  marginInlineEnd,
  marginInlineStart,

  // padding
  paddingBlockEnd,
  paddingBlockStart,
  paddingInlineEnd,
  paddingInlineStart,

  lineClamp,

  ...rest
}) =>
  createElement(
    tag,

    {
      className: cn([
        className,
        ClassName,

        ContentLayer({
          contentAlign,
        }),

        MarginLayer({
          marginBlockEnd,
          marginBlockStart,
          marginInlineEnd,
          marginInlineStart,
        }),

        PaddingLayer({
          paddingBlockEnd,
          paddingBlockStart,
          paddingInlineEnd,
          paddingInlineStart,
        }),

        ColorLayer({
          color,
        }),

        FontLayer({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }),

        LineClampLayer({
          lineClamp,
        }),
      ]),

      ...rest,
    },

    children
  )

export { mimicryAs } from './data'
export type { Props, NodeProps, Tag } from './types'
export default ProtoComponent
