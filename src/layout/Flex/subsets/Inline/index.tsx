import React, { VFC } from 'react'
import {
  FlexDirectionMap,
  AlignContentMap,
  AlignItemsMap,
  FlexWrapMap,
} from 'layers/Flex'
import Component, { Props } from '../../Component'

const Inline: VFC<
  Omit<Props, 'direction' | 'alignContent' | 'alignItems' | 'wrap'>
> = (props) =>
  Component({
    direction: FlexDirectionMap.row,
    alignContent: AlignContentMap.default,
    alignItems: AlignItemsMap.default,
    wrap: FlexWrapMap.nowrap,
    ...props,
  })

export default Inline
