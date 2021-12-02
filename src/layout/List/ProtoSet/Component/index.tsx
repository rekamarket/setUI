import { VFC, Children, createElement } from 'react'
import cn from 'classnames'
import {
  FlexLayer,
  MarkerLayer,
  MarginLayer,
  PaddingLayer,
  ColorLayer,
  FontLayer,
} from 'layers'
import { component } from './data'
import { Props } from './types'
import { ClassName } from './styles.css'

const List: VFC<Props> = ({
  as,
  value,
  className,
  children,

  // flex
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,

  // marker
  markerGap,
  markerPosition,
  markerSize,
  markerSymbol,

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

  // text
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
}) =>
  createElement(
    component[as],

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

        MarkerLayer({
          markerGap,
          markerPosition,
          markerSize,
          markerSymbol,
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

    Children.map(children, (child, i) =>
      createElement('li', i === 0 && value ? { value } : {}, child)
    )
  )

export type { Props } from './types'
export default List
