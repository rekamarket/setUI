import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Q.BlockQuote'

const Set: VFC<Props> = ({ children, className, ...props }) =>
  ProtoSet({
    children,
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    className: cn(ClassName, className),
  })

Set.displayName = displayName

export default Set
