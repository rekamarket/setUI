import React, { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, ZIndex } from 'CSS'
import { BlockLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const styles = new BlockLayer()

const Box: VFC<Props> = ({
  aspectRatio,

  zIndex,

  children,

  ...rest
}) => {
  return (
    <div
      className={cn([
        // root
        ClassName,
        AspectRatio[aspectRatio] || AspectRatio.default,
        ZIndex[zIndex] || ZIndex.default,
        styles.set(rest).box,
      ])}
    >
      {children}
    </div>
  )
}

export type { Props } from './types'

export default Box
