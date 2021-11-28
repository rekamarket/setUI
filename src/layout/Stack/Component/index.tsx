import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, ZIndex } from 'CSS'
import BlockLayer from 'reason/layers/Block'
import FlexLayer from 'reason/layers/Flex'
import { tags } from './data'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const flex = new FlexLayer()

const Stack: VFC<Props> = ({
  as,

  aspectRatio,

  zIndex,

  children,

  // flex
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,

  // background
  backgroundAttachment,
  backgroundClip,
  backgroundColor,
  backgroundOpacity,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,

  // border
  borderColor,
  borderOpacity,
  borderStyle,
  borderThickness,

  // content
  contentAlign,

  // corner
  cornerRadius,

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
}) => createElement(
  tags[as] || tags.div,

  {
    className: cn([
      // root
      ClassName,

      // generic
      AspectRatio[aspectRatio] || AspectRatio.default,

      block.resolve({
        // background
        backgroundAttachment,
        backgroundClip,
        backgroundColor,
        backgroundOpacity,
        backgroundOrigin,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,

        // border
        borderColor,
        borderOpacity,
        borderStyle,
        borderThickness,

        // content
        contentAlign,

        // corner
        cornerRadius,

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
      }),
      flex.resolve({
        alignContent,
        alignItems,
        flexDirection,
        flexWrap,
        gap,
        justifyContent,
      }),

      ZIndex[zIndex] || ZIndex.default,
    ]),
  },

  children
)

export type { Props } from './types'

export default Stack
