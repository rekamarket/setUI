import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import TextLayer from 'reason/layers/Text'
import BlockLayer from 'reason/layers/Block'
import { CharsPerLine } from '../css'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer()
const text = new TextLayer()

const Article: VFC<Props> = ({
  as,
  className,
  charsPerLine,
  children,

  // text
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  backgroundColor,
  spacingBefore,
  spacingAfter,
  textDecorationColor,
  textDecorationLine,
  textDecorationStyle,
  textDecorationThickness,
  textTransform,

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
        CharsPerLine[charsPerLine],
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
        text.resolve({
          color,
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          backgroundColor,
          spacingBefore,
          spacingAfter,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
          textTransform,
        }),
      ]),
    },

    children
  )

export type { Props } from './types'

export default Article
