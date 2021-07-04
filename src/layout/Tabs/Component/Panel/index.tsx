import React, { VFC } from 'react'
import cn from 'classnames'
import { TabPane } from 'rc-tabs'
import { BlockLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()

const Component: VFC<Props> = (props) => {
  return (
    <TabPane
      className={cn([
        ClassName,
        block.set(props).padding,
        block.set(props).margin,
      ])}
      {...props}
    />
  )
}

export type { Props } from './types'

export default Component
