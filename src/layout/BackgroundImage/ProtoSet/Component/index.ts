import { VFC, createElement, useMemo } from 'react'
import cn from 'classnames'
import {
  FlexLayer,
  BackgroundLayer,
  ContentLayer,
  MarginLayer,
  PaddingLayer,
  ColorLayer,
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

  // background
  backgroundAttachment,
  backgroundClip,
  backgroundColor,
  backgroundOpacity,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,

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

  style,
  ...rest
}) => {
  const styleMerged = useMemo(
    () => ({
      ...style,
      backgroundImage: `url(${image})`,
    }),
    [style, image]
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
      ]),
      style: styleMerged,
      ...rest,
    },

    children
  )
}

export type { Props } from './types'
export default BackgroundImage
