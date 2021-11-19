import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { ZIndex, Width } from 'CSS'
import { BlockLayer } from 'layers'
import FlexLayer from 'reason/layers/Flex'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const flex = new FlexLayer()

const Flex: VFC<Props> = ({
  className,

  zIndex,
  width,

  children,

  ...rest
}) => {
  return (
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
}

export type { Props } from './types'

export default Flex
