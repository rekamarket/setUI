import React, { VFC } from 'react'
import cn from 'classnames'
import { Axis, Color, Offset, Weight } from './css'
import { Props } from './types'
import { ClassName } from './styles.css'

const ProtoComponent: VFC<Props> = ({
  className,
  axis,
  color,
  offset,
  weight,
}) => (
  <hr
    className={cn([
      ClassName,
      className,

      Axis[axis],
      Color[color],
      Offset[offset],
      Weight[weight],
    ])}
  />
)

export {
  axisResolve,
  useAxis,
  AxisContext,
  colorResolve,
  useColor,
  ColorContext,
  offsetResolve,
  useOffset,
  OffsetContext,
  weightResolve,
  useWeight,
  WeightContext,
} from './css'
export type { Props, StyleProps } from './types'
export default ProtoComponent
