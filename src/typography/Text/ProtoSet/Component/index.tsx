import { FC, createElement } from 'react'
import cn from 'classnames'
import TextLayer from 'reason/layers/Text'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const text = new TextLayer()

const Text: FC<PropsRequired> = ({
  // basic
  as,
  title,
  className,

  children,

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
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
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
      title,
    },

    children
  )

export type { Props } from './types'

export default Text
