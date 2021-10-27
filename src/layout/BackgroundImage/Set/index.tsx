import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'BackgroundImage'

const BackgroundImage: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    as: 'div',
    className: cn(ClassName, className),
  })

BackgroundImage.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default BackgroundImage
