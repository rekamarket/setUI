import { VFC } from 'react'
import cn from 'classnames'
import { axisResolve, colorResolve, offsetResolve, weightResolve } from '../css'
import ProtoComponent from '../ProtoComponent'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Component: VFC<Props> = ({ defaultStyle, className, ...rest }) =>
  ProtoComponent({
    ...rest,
    className: cn(ClassName, className),
    axis: axisResolve(rest) || rest?.axis || defaultStyle.axis || 'default',
    color:
      colorResolve(rest) || rest?.color || defaultStyle?.color || 'default',
    offset:
      offsetResolve(rest) || rest?.offset || defaultStyle.offset || 'default',
    weight:
      weightResolve(rest) || rest?.weight || defaultStyle.weight || 'default',
  })

export type { Props, DefaultStyleProps } from './types'
export default Component
