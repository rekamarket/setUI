import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Text.DefinedTerm'

const DefinedTerm: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<any>(defaultProps, props),

    // props override
    as: 'dfn',
    className: cn(ClassName, className),
  })

DefinedTerm.displayName = displayName

export default DefinedTerm
