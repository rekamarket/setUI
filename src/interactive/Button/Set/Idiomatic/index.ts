import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Button'

const Set: VFC<Props> = ({ children, className, color, ...rest }) =>
  ProtoSet({
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        color,
        ...rest,
      },
      displayName
    ),

    // props override
    as: 'button',
    className: cn(ClassName, className),
  })

Set.displayName = displayName

export default Set
