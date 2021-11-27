import { FC, createElement } from 'react'
import cn from 'classnames'
import TextLayer from 'reason/layers/Text'
import { LinkLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const link = new LinkLayer()

const text = new TextLayer()

const Link: FC<Props> = ({
  href,
  title,
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
  <a
    href={href}
    className={cn([
      className,
      ClassName,
      link.set(rest).box,
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
    title={title}
  >
    {children}
  </a>
)

export type { Props } from './types'

export default Link
