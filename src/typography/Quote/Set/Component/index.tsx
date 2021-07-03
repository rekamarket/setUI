import { FC, createElement } from 'react'
import cn from 'classnames'
import { Display } from 'CSS'
import { BlockLayer, TextLayer } from 'layers'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const text = new TextLayer()

const Quote: FC<Props> = ({
  as,
  cite,
  title,
  className,

  display,

  children,

  ...rest
}) => {
  return createElement(
    component[as] || component.q,

    {
      className: cn([
        className,
        ClassName,

        Display[display] || Display.inline,
        block.set(rest).box,
        text.set(rest).box,
      ]),
      cite,
      title,
    },

    children
  )
}

export type { Props } from './types'

export default Quote
