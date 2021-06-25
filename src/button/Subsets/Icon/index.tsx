import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultStyle } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'Button.Icon'

const Icon: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<Props>(defaultStyle, props, displayName),

    defaultStyle,
    // props override
    className: cn(ClassName, className),
    shape: 'square',
  })

Icon.displayName = displayName

export { defaultStyle } from './defaultProps'
export type { Props } from './types'
export default Icon
