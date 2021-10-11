import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

const displayName = 'BackgroundImage.Main'

const Main: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    as: 'main',
    className: cn(ClassName, className),
  })

Main.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Main
