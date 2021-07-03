import { FC, createElement } from 'react'
import cn from 'classnames'
import { Display } from 'CSS'
import { BlockLayer, TextLayer } from 'layers'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const text = new TextLayer()

const Code: FC<PropsRequired> = ({
  // basic
  as,
  className,
  title,

  // style
  display,

  children,

  ...rest
}) => {
  return createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        Display[display],
        block.set(rest).padding,
        text.set(rest).box,
      ]),
      title,
    },

    children
  )
}

export type { Props, PropsRequired } from './types'

export default Code
