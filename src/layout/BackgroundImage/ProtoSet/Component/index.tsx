import { FC, createElement, useMemo } from 'react'
import cn from 'classnames'
import { BlockLayer } from 'layers'
import FlexLayer from 'reason/layers/Flex'
import { Props } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  useMargin: true,
  usePadding: true,
  useBackground: true,
})
const flex = new FlexLayer()

const BackgroundImage: FC<Props> = ({
  as,
  className,
  image,
  children,

  // flex
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,
  ...rest
}) => {
  const style = useMemo(
    () => ({
      backgroundImage: `url(${image})`,
    }),
    [image]
  )

  return createElement(
    component[as],

    {
      className: cn([
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
      ]),
      style,
    },

    children
  )
}

export type { Props } from './types'
export default BackgroundImage
