import { VFC, createElement, useMemo } from 'react'
import cn from 'classnames'
import {
  FlexLayer,
  BackgroundLayer,
  BorderLayer,
  ContentLayer,
  CornerLayer,
  MarginLayer,
  PaddingLayer,
  ColorLayer,
  TextDecorationLayer,
  FontLayer,
  TextTransformLayer,
} from 'layers'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const BackgroundImage: VFC<Props> = ({
  as,
  className,
  image,
  children,

  // flex
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,

  // text
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
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
}) => {
  const style = useMemo(
    () => ({
      backgroundImage: `url(${image})`,
    }),
    [image]
  )

  return createElement(
    component[as],

    {
      className: cn([
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

        ColorLayer({
          color,
        }),

        TextDecorationLayer({
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textDecorationThickness,
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
      style,
    },

    children
  )
}

export type { Props } from './types'
export default BackgroundImage
