import { VFC } from 'react'
import cn from 'classnames'
import ProtoComponent from '../ProtoComponent'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Component: VFC<Props> = ({ defaultStyle, className, ...rest }) =>
  ProtoComponent({
    ...rest,
    className: cn(ClassName, className),
    axis: rest?.axis || defaultStyle.axis || 'default',
    color: rest?.color || defaultStyle?.color || 'default',
    offset: rest?.offset || defaultStyle.offset || 'default',
    weight: rest?.weight || defaultStyle.weight || 'default',
  })

export type { Props, DefaultStyleProps } from './types'
export default Component
