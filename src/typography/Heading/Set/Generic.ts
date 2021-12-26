import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'
import type { Props } from '../types'
import ProtoSet from '../ProtoSet'

export const displayName = 'Heading'

const Component: VFC<Props> = ({ children, className, level = 1, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning(defaultProps, props),

    // props override
    OVERRIDE_TAG_SEMANTICS: false,
    level,
    children,
    className: cn(ClassName, className),
  })

Component.displayName = displayName

export default Component
