import { FC, createElement } from 'react'
import cn from 'classnames'
import { BlockLayer, TextLayer } from 'layers'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  usePadding: true,
})
const text = new TextLayer()

const Text: FC<PropsRequired> = ({
  // basic
  as,
  title,
  className,

  children,

  ...rest
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,

        block.set(rest).box,
        text.set(rest).box,
      ]),
      title,
    },

    children
  )

export type { Props } from './types'

export default Text
