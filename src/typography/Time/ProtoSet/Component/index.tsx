import { FC, createElement } from 'react'
import cn from 'classnames'
import TextLayer from 'reason/layers/Text'
import { BlockLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  useMargin: true,
  usePadding: true,
})
const text = new TextLayer()

const Time: FC<Props> = ({
  datetime,
  title,

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
  <time
    className={cn([
      ClassName,
      block.set(rest).padding,
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
    ])}
    dateTime={datetime}
    title={title}
  >
    {children}
  </time>
)

export type { Props } from './types'

export default Time
