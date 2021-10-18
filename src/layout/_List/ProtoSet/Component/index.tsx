import React, { VFC, Children, createElement } from 'react'
import cn from 'classnames'
import { ZIndex, Width } from 'CSS'
import { BlockLayer, FlexLayer } from 'layers'
import { ListLayer } from './layers'
import { displayName as dividerName } from '../SubComponents/Divider'
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
        flex.set(rest).box,
        list.set(rest).box,

        ZIndex[zIndex] || ZIndex.default,
        Width[width] || Width.default,
      ]),
    },

    Children.map(children, (child, i) => {
      if (child.type.displayName === dividerName) {
        return child
      }
      return <li {...(i === 0 && value ? { value } : {})}>{child}</li>
    })
  )

export type { Props, PropsRequired } from './types'

export default Flex
