import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Heading'

const Set: VFC<Props> = ({
  children,
  level = 1,
  className,
  color,
  fontSize,
  fontWeight,
}) =>
  ProtoSet({
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        color,
        fontSize,
        fontWeight,
      },
      displayName
    ),

    level,
    // props override
    className: cn(ClassName, className),
  })

Set.displayName = displayName

export type { Props } from './types'
export default Set
