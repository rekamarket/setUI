import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'List'

const List: VFC<Props> = ({
  children,
  as,
  className,
  color,
  fontSize,
  ...rest
}) =>
  ProtoSet({
    children,
    as,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        color,
        fontSize,
        ...rest,
      },
      displayName
    ),

    // props override
    className: cn(ClassName, className),
  })

List.displayName = displayName

export type { Props } from './types'
export default List
