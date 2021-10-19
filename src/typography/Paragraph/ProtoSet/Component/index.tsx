import { FC, createElement } from 'react'
import cn from 'classnames'
import { ZIndex } from 'CSS'
import { BlockLayer, TextLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
})
const text = new TextLayer()

const Paragraph: FC<Props> = ({ as, className, zIndex, children, ...rest }) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        block.set(rest).box,
        text.set(rest).box,
        ZIndex[zIndex] || ZIndex.default,
      ]),
    },

    children
  )

export type { Props } from './types'
export default Paragraph
