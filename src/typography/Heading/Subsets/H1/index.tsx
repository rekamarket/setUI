import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'Heading.H1'

const H1: FC<Props> = ({ className, ...props }) => {
  return ProtoSet({
    ...object.mergePropsWithWarning<PropsRequired>(defaultProps, props),

    // props override
    level: 1,
    className: cn(ClassName, className),
  })
}

H1.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default H1
