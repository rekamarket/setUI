import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, ZIndex } from 'CSS'
import { BlockLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'
import { component } from './data'

const block = new BlockLayer({
  useBorder: true,
  usePadding: true,
})

const Box: VFC<Props> = ({
  as,
  className,
  aspectRatio,
  zIndex,
  children,
  ...rest
}) =>
  createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,
        AspectRatio[aspectRatio] || AspectRatio.default,
        ZIndex[zIndex] || ZIndex.default,
        block.set(rest).box,
      ]),
    },

    children
  )

export type { Props } from './types'

export default Box
