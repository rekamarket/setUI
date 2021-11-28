import { FC, createElement, useMemo } from 'react'
import cn from 'classnames'
import FlexLayer from 'reason/layers/Flex'
import BlockLayer from 'reason/layers/Block'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const flex = new FlexLayer()

const BackgroundImage: FC<Props> = ({
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
      ]),
      style,
    },

    children
  )
}

export type { Props } from './types'
export default BackgroundImage
