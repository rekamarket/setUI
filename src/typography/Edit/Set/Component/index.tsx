import { FC, createElement } from 'react'
import cn from 'classnames'
import { BlockLayer, TextLayer } from 'layers'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const text = new TextLayer()

const Edit: FC<PropsRequired> = ({
  // basic
  as,
  cite,
  datetime,
  className,

  children,

  ...rest
}) => {
  return createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        block.set(rest).padding,
        block.set(rest).background,
        text.set(rest).box,
      ]),
      cite,
      dateTime: datetime,
    },

    children
  )
}

export type { Props, PropsRequired } from './types'

export default Edit
