import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'Button'

const Button: VFC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    defaultStyle: defaultProps,
    // props override
    className: cn(ClassName, className),
  })

Button.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Button
