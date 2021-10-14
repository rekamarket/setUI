import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'Heading.H3'

const H3: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    level: 3,
    className: cn(ClassName, className),
  })

H3.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default H3
