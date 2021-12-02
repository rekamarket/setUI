import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  FlexLayer,
  BackgroundLayer,
  BorderLayer,
  ContentLayer,
  CornerLayer,
  MarginLayer,
  PaddingLayer,
} from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const Flex: VFC<Props> = ({
  className,

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
}) =>
  createElement(
    'div',
    {
      className: cn([
        // root
        className,
        ClassName,

        FlexLayer({
          alignContent,
          alignItems,
          flexDirection,
          flexWrap,
          gap,
          justifyContent,
        }),

        BackgroundLayer({
          backgroundAttachment,
          backgroundClip,
          backgroundColor,
          backgroundOpacity,
          backgroundOrigin,
          backgroundPosition,
          backgroundRepeat,
          backgroundSize,
        }),

        BorderLayer({
          borderColor,
          borderOpacity,
          borderStyle,
          borderThickness,
        }),

        ContentLayer({
          contentAlign,
        }),

        CornerLayer({
          cornerRadius,
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
      ]),
    },
    children
  )

export type { Props } from './types'
export default Flex
