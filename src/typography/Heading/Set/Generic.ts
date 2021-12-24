import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'
import { displayName as pureName } from './Pure'
import type { Props } from '../types'
import ProtoSet from '../ProtoSet'

export const displayName = `Heading.${pureName}`

const Component: VFC<Props> = ({ children, className, level = 1, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning(defaultProps, props),

    // props override
    children,
    level,
    className: cn(ClassName, className),
  })

Component.displayName = displayName

export default Component
