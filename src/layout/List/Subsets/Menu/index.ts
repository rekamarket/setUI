import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'List.Menu'

const Menu: VFC<Props> = ({ children, className, ...props }) =>
  ProtoSet({
    children,
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    as: 'menu',
    className: cn(ClassName, className),
  })

Menu.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Menu
