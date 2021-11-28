import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import TextLayer from 'reason/layers/Text'
import { BlockLayer } from 'layers'
import { CharsPerLine } from '../css'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer({
  useBorder: true,
  usePadding: true,
})
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

  ...rest
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        CharsPerLine[charsPerLine],
        block.set(rest).box,
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
