import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, ZIndex } from 'CSS'
import { BlockLayer } from 'reason/layers/Block'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer()

const Box: VFC<Props> = ({
  as,
  className,
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
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        AspectRatio[aspectRatio] || AspectRatio.default,
        ZIndex[zIndex] || ZIndex.default,
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
      ]),
    },

    children
  )

export type { Props } from './types'

export default Box
