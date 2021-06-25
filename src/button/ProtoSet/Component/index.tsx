import { VFC } from 'react'
import cn from 'classnames'
import ProtoComponent from '../ProtoComponent'
import type { Props } from './types'
import { Radius, Shape, Size, Theme, Variant } from '../css'
import { ClassName } from './styles.css'

const ButtonComponent: VFC<Props> = ({ defaultStyle, className, ...rest }) =>
  ProtoComponent({
    ...rest,
    className: cn(ClassName, className),
    radius: rest?.radius || defaultStyle?.radius || 'default',
    shape: rest?.shape || defaultStyle.shape || 'default',
    size: rest?.size || defaultStyle.size || 'default',
    theme: rest?.theme || defaultStyle.theme || 'default',
    variant: rest?.variant || defaultStyle.variant || 'default',
  })

export type { Props, DefaultStyleProps } from './types'
export default ButtonComponent
