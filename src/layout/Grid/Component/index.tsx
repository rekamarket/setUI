import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { ZIndex, Width } from 'CSS'
import { BlockLayer, FlexLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
  useBorder: true,
  useBackground: true,
})

const flex = new FlexLayer()

const Grid: VFC<Props> = ({
  className,

  zIndex,
  width,

  children,

  ...rest
}) => (
  <div
    className={cn([
      // root
      className,
      ClassName,

      block.set(rest).box,
      flex.set(rest).box,

      ZIndex[zIndex] || ZIndex.default,
      Width[width] || Width.default,
    ])}
  >
    {children}
  </div>
)

export type { Props } from './types'

export default Grid
