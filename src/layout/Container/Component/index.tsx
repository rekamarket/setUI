import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, ZIndex } from 'CSS'
import BlockLayer from 'reason/layers/Block'
import { Direction, MaxWidth } from '../css'
import { tags } from './data'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()

const Container: VFC<Props> = ({
  as,

  // custom
  size,
  direction,

  aspectRatio,

  zIndex,

  children,

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
}) => {
  return createElement(
    tags[as] || tags.div,

    {
      className: cn([
        // root
        ClassName,

        // custom
        MaxWidth[size] || MaxWidth.default,
        Direction[direction] || Direction.default,

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

        ZIndex[zIndex] || ZIndex.default,
      ]),
    },

    children
  )
}

export type { Props } from './types'

export default Container
