import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'Cover'

const Section: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    as: 'section',
    className: cn(ClassName, className),
  })

Section.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Section
