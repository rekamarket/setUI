import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  CharsPerLineLayer,
  ContentLayer,
  MarginLayer,
  PaddingLayer,
  ColorLayer,
  FontLayer,
  TextTransformLayer,
} from 'layers'
import { Props, NodeProps } from './types'
import { headers } from './data'
import { ClassName } from './styles.css'

const Heading: VFC<Props & NodeProps> = ({
  // basic
  OVERRIDE_TAG_SEMANTICS,
  level,
  className,
  title,
  children,

  charsPerLine,

  // color
  color,

  // font
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,

  // text
  textTransform,

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

  ...rest
}) =>
  createElement(
    OVERRIDE_TAG_SEMANTICS ? 'div' : headers[level],

    {
      ...(OVERRIDE_TAG_SEMANTICS
        ? {
            role: 'heading',
            'aria-level': level,
          }
        : {}),

      className: cn([
        className,
        ClassName,

        CharsPerLineLayer({
          charsPerLine,
        }),

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

        TextTransformLayer({
          textTransform,
        }),
      ]),
      title,
      ...rest,
    },

    children
  )

export { mimicryAs } from './data'
export { LevelKeys } from './types'
export type { Props, NodeProps, AsType } from './types'
export default Heading
