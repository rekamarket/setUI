import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'
import { displayName as pureName } from './Pure'
import type { NonSemantic } from '../../types'
import ProtoSet from '../../ProtoSet'

export const displayName = `Heading.${pureName}`

const Component: VFC<NonSemantic> = ({ children, className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning(defaultProps, props),

    // props override
    OVERRIDE_TAG_SEMANTICS: false,
    level: 6,
    children,
    className: cn(ClassName, className),
  })

Component.displayName = displayName

export default Component
