import { VFC, createElement } from 'react'
import cn from 'classnames'
import {
  QuoteLayer,
  ContentLayer,
  MarginLayer,
  PaddingLayer,
  ColorLayer,
  FontLayer,
} from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const BlockQuote: VFC<Props> = ({
  as,
  className,
  children,

  // quote
  quoteGap,
  quotePosition,
  quoteSize,
  quoteSymbol,

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

        QuoteLayer({
          quoteGap,
          quotePosition,
          quoteSize,
          quoteSymbol,
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
export default BlockQuote
