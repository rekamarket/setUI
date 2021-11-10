import { FC, createElement } from 'react'
import cn from 'classnames'
import { TextLayer } from 'layers'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const text = new TextLayer({
  useSpacing: true,
})

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
      className: cn([className, ClassName, text.set(rest).box]),
      title,
    },

    children
  )

export type { Props } from './types'

export default Text
