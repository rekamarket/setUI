import { FC, createElement } from 'react'
import cn from 'classnames'
import TextLayer from 'reason/layers/Text'
import BlockLayer from 'reason/layers/Block'
import { PropsRequired } from './types'
import { ClassName } from './styles.css'
import { SymbolLayer } from './layers'

const block = new BlockLayer()
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
}) => (
  <blockquote
    cite={cite}
    className={cn([
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
