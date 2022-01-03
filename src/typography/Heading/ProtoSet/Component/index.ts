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
  TextOverflowLayer,
} from 'layers'
import { Props, NodeProps } from './types'
import { tags } from './data'
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

  // text
  textTransform,

  // textOverflow
  hyphens,
  overflowWrap,
  textOverflow,
  wordBreak,

  ...rest
}) =>
  createElement(
    OVERRIDE_TAG_SEMANTICS ? 'div' : tags[level],

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

        TextOverflowLayer({
          hyphens,
          overflowWrap,
          textOverflow,
          wordBreak,
        }),
      ]),
      title,
      ...rest,
    },

    children
  )

export { mimicryAs } from './data'
export type { Props, NodeProps, AsType } from './types'
export default Heading
