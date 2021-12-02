import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  ContentLayer,
  MarginLayer,
  PaddingLayer,
  ColorLayer,
  FontLayer,
} from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const Paragraph: VFC<Props> = ({
  as,
  className,
  children,

  // text
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,

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
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,

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

        FontLayer({
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
        }),
      ]),
    },

    children
  )

export type { Props } from './types'
export default Paragraph
