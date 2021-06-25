import React, { VFC } from 'react'
import cn from 'classnames'
import FlexComponent from 'layout/Flex'
import {
  AxisContext,
  ColorContext,
  OffsetContext,
  WeightContext,
} from '../../ProtoSet'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Flex: VFC<Props> = ({
  axis,
  color,
  offset,
  weight,
  className,
  ...flexProps
}) =>
  [
    <AxisContext.Provider value={axis} />,
    <ColorContext.Provider value={color} />,
    <OffsetContext.Provider value={offset} />,
    <WeightContext.Provider value={weight} />,
  ].reduce(
    (prev, provider) => React.cloneElement(provider, {}, prev),
    <FlexComponent {...flexProps} className={cn(ClassName, className)} />
  )

export type { Props } from './types'
export default Flex
