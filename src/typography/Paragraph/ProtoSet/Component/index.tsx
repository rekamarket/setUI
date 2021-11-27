import { FC, createElement } from 'react'
import cn from 'classnames'
import { ZIndex } from 'CSS'
import TextLayer from 'reason/layers/Text'
import { BlockLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
})
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

  ...rest
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
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
        ZIndex[zIndex] || ZIndex.default,
      ]),
    },

    children
  )

export type { Props } from './types'
export default Paragraph
