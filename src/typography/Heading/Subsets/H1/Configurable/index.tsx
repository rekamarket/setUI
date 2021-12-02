import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Heading.H1'

const H1: VFC<Props> = ({ children, className, ...props }) =>
  ProtoSet({
    children,
    ...object.mergePropsWithWarning(defaultProps, props),

    // props override
    level: 1,
    className: cn(ClassName, className),
  })

H1.displayName = displayName

export default H1
