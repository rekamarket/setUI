import { FC, createElement } from 'react'
import cn from 'classnames'
import { ZIndex } from 'CSS'
import TextLayer from 'reason/layers/Text'
import BlockLayer from 'reason/layers/Block'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer()
const text = new TextLayer()

const Paragraph: FC<Props> = ({
  as,
  className,
  zIndex,
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
        ZIndex[zIndex] || ZIndex.default,
      ]),
    },

    children
  )

export type { Props } from './types'
export default Paragraph
