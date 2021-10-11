import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { BlockLayer, TextLayer } from 'layers'
import { Length } from '../css'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer({
  useBorder: true,
  usePadding: true,
})
const text = new TextLayer()

const Article: VFC<Props> = ({
  as,
  className,
  length,
  children,
  ...rest
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        Length[length],
        block.set(rest).box,
        text.set(rest).box,
      ]),
    },

    children
  )

export type { Props } from './types'

export default Article
