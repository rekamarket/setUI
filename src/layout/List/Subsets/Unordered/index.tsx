import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'UnorderedList'

const Unordered: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<any>(defaultProps, props, displayName),

    // props override
    as: 'ul',
    className: cn(ClassName, className),
  })

Unordered.displayName = displayName

export { ClassName as unorderedList } from './styles.css'
export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Unordered
