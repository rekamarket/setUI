import { VFC, createElement } from 'react'
import cn from 'classnames'
import { object } from 'utils'
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
import { Props as ProtoProps, NodeProps } from './types'
import { getTagByLevel } from './data'
import { ClassName } from './styles.css'

type Props = ProtoProps & NodeProps

const Heading: VFC<Props> = ({
  // basic
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
}) => {
  const isSemanticsOverriden = 'tag' in rest
  const tag = isSemanticsOverriden ? rest.tag : getTagByLevel(level)

  return createElement(
    tag,

    {
      ...(isSemanticsOverriden
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
      ...object.omit(rest, 'tag'),
    },

    children
  )
}

export { mimicryAs, getTagByLevel } from './data'
export type { Props, NodeProps, Semantics } from './types'
export default Heading
