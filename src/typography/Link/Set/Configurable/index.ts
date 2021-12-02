import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Q.Link'

const Set: VFC<Props> = ({ children, className, href, ...props }) =>
  ProtoSet({
    children,
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    href,
    className: cn(ClassName, className),
  })

Set.displayName = displayName

export default Set
