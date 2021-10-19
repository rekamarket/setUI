import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Paragraph'

const Set: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<any>(defaultProps, props, displayName),

    // props override
    as: 'div',
    className: cn(ClassName, className),
  })

Set.displayName = displayName

export default Set
