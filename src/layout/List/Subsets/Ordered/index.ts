import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'List.Ordered'

const Ordered: VFC<Props> = ({ children, className, ...props }) =>
  ProtoSet({
    children,
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    as: 'ol',
    className: cn(ClassName, className),
  })

Ordered.displayName = displayName

export { ClassName as orderedList } from './styles.css'
export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Ordered
