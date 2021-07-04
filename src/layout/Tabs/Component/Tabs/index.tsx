import React, { VFC } from 'react'
import cn from 'classnames'
import Tabs from 'rc-tabs'
import { BlockLayer } from 'layers'
import { Theme } from '../css'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()

const Component: VFC<Props> = ({
  theme,

  ...rest
}) => {
  return (
    <Tabs
      className={cn([
        ClassName,
        Theme[theme] || Theme.default,

        block.set(rest).padding,
        block.set(rest).margin,
      ])}
      {...rest}
    />
  )
}

export type { Props } from './types'

export default Component
