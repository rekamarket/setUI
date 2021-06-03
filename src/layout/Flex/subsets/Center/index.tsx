import { VFC } from 'react'
import {
  AlignContentMap,
  AlignItemsMap,
  FlexDirectionMap,
  FlexWrapMap,
  JustifyContentMap,
} from 'CSS'
import Component, { Props } from '../../Component'

const Center: VFC<
  Omit<
    Props,
    'direction' | 'alignContent' | 'alignItems' | 'wrap' | 'justifyContent'
  >
> = (props) =>
  Component({
    direction: FlexDirectionMap.row,
    alignContent: AlignContentMap.default,
    alignItems: AlignItemsMap.default,
    wrap: FlexWrapMap.nowrap,
    justifyContent: JustifyContentMap.center,
    ...props,
  })

export default Center
