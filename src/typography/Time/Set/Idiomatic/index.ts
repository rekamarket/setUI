import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Time'

const Time: VFC<Props> = ({
  children,
  className,
  fontSize: fontSizeFromProps,
  color: colorFromProps,
  ...props
}) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    children,
    ...object.mergePropsWithWarning(
      defaultProps,
      {
        color: colorFromProps || color,
        fontSize: fontSizeFromProps || fontSize,
        ...props,
      },
      displayName
    ),

    // props override
    className: cn(ClassName, className),
  })
}

Time.displayName = displayName

export type { Props } from './types'
export default Time
