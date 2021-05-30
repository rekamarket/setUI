import { FC } from 'react'
import {
  FlexDirectionMap,
  AlignContentMap,
  AlignItemsMap,
  FlexWrapMap,
} from 'CSS'
import Component, { Props } from '../../Component'

const Inline: FC<
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
