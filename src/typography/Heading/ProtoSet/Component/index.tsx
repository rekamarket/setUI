import { FC, createElement } from 'react'
import cn from 'classnames'
import { Display } from 'CSS'
import TextLayer from 'reason/layers/Text'
import BlockLayer from 'reason/layers/Block'
import { CharsPerLine, weightResolve, Weight, WeightProps } from '../css'
import { PropsRequired } from './types'
import { headers } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
})

// const text = new TextLayer<WeightProps>({
//   fontWeight: {
//     resolver: weightResolve,
//     Style: Weight,
//   },
// })
const text = new TextLayer()

const Heading: FC<PropsRequired> = ({
  // basic
  level,
  className,
  title,

  // styles
  display,

  children,

  charsPerLine,

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
}) =>
  createElement(
    headers[level],

    {
      className: cn([
        className,
        ClassName,
        CharsPerLine[charsPerLine],
        Display[display],
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
      ]),
    },

    children
  )

export { LevelKeys } from './types'
export type { Props, PropsRequired } from './types'

export default Heading
