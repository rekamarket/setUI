import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, ZIndex } from 'CSS'
import { BlockLayer, FlexLayer } from 'layers'
import { tags } from './data'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const flex = new FlexLayer()

const Start: VFC<Props> = ({
  as,

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

export default Start
