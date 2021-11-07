import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers/Text'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'Link'

const Link: FC<Props> = ({ className, ...props }) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...object.mergePropsWithWarning<any>(defaultProps, props, displayName),

    // props override
    className: cn(ClassName, className),
    color: props?.color || color || defaultProps.color,
    fontSize: props?.fontSize || fontSize || defaultProps.fontSize,
  })
}

Link.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Link
