import React, { VFC, Children, createElement } from 'react'
import cn from 'classnames'
import { ZIndex, Width } from 'CSS'
import { BlockLayer } from 'layers'
import FlexLayer from 'reason/layers/Flex'
import { ListLayer } from './layers'
import { component } from './data'
import { Props, PropsRequired } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
  useBorder: true,
  useBackground: true,
})
const flex = new FlexLayer()
const list = new ListLayer()

const Flex: VFC<PropsRequired> = ({
  as,
  value,
  className,

  zIndex,
  width,

  children,

  // flex
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,
  ...rest
}) =>
  createElement(
    component[as],

    {
      className: cn([
        // root
        className,
        ClassName,

        block.set(rest).box,
        flex.resolve({
          alignContent,
          alignItems,
          flexDirection,
          flexWrap,
          gap,
          justifyContent,
        }),
        list.set(rest).box,

        ZIndex[zIndex] || ZIndex.default,
        Width[width] || Width.default,
      ]),
    },

    Children.map(children, (child, i) => (
      <li {...(i === 0 && value ? { value } : {})}>{child}</li>
    ))
  )

export { listArgTypes } from './layers'
export type { Props, PropsRequired } from './types'
export default Flex
