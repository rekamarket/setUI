import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'Button.Icon'

const Icon: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    aspectRatio: '1x1',
    className: cn(ClassName, className),
  })

Icon.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Icon
