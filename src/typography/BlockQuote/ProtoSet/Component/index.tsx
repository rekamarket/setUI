import { FC, createElement } from 'react'
import cn from 'classnames'
import TextLayer from 'reason/layers/Text'
import { BlockLayer } from 'layers'
import { PropsRequired } from './types'
import { ClassName } from './styles.css'
import { SymbolLayer } from './layers'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
})
const text = new TextLayer()
const symbol = new SymbolLayer()

const BlockQuote: FC<PropsRequired> = ({
  // basic
  cite,
  className,

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
}) => (
  <blockquote
    cite={cite}
    className={cn([
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
      symbol.set(rest).box,
    ])}
  >
    {children}
  </blockquote>
)

export type { Props, PropsRequired } from './types'
export { symbolArgTypes } from './layers'
export default BlockQuote
