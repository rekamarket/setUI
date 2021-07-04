import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, ZIndex } from 'CSS'
import { BlockLayer, FlexLayer } from 'layers'
import { Direction } from '../css'
import { tags } from './data'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const flex = new FlexLayer()

const Segment: VFC<Props> = ({
  as,

  // custom
  direction,

  // generic
  aspectRatio,

  zIndex,

  children,

  ...rest
}) => {
  return createElement(
    tags[as] || tags.div,

    {
      className: cn([
        // root
        ClassName,

        // custom
        Direction[direction] || Direction.default,

        // generic
        AspectRatio[aspectRatio] || AspectRatio.default,

        block.set(rest).box,
        flex.set(rest).box,

        ZIndex[zIndex] || ZIndex.default,
      ]),
    },

    children
  )
}

export type { Props } from './types'

export default Segment
