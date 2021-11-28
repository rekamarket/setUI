import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { ZIndex, Width } from 'CSS'
import BlockLayer from 'reason/layers/Block'
import FlexLayer from 'reason/layers/Flex'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const flex = new FlexLayer()

const Grid: VFC<Props> = ({
  className,

  zIndex,
  width,

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
}) => (
  <div
    className={cn([
      // root
      className,
      ClassName,

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
      Width[width] || Width.default,
    ])}
  >
    {children}
  </div>
)

export type { Props } from './types'

export default Grid
