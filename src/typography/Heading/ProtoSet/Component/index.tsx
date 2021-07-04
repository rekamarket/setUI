import { FC, createElement } from 'react'
import cn from 'classnames'
import { Display } from 'CSS'
import { BlockLayer, TextLayer } from 'layers'
import { weightResolve } from '../css'
import { PropsRequired } from './types'
import { headers } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const text = new TextLayer()

const Heading: FC<PropsRequired> = ({
  // basic
  level,
  className,
  title,

  // styles
  display,

  children,

  ...rest
}) => {
  return createElement(
    headers[level],

    {
      className: cn([
        className,
        ClassName,
        Display[display],
        block.set(rest).background,
        block.set(rest).border,
        text.set(rest).box,
        weightResolve<Partial<PropsRequired>>(rest),
      ]),
    },

    children
  )
}

export type { Props, PropsRequired } from './types'

export default Heading
