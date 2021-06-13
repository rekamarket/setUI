import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'Text'

const Text: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    className: cn(ClassName, className),
  })

Text.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Text
