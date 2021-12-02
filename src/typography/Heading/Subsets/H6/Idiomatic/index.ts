import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'
import { ClassName } from '../styles.css'

export const displayName = 'H6'

const H6: VFC<Props> = ({
  className,
  children,
  fontSize: fontSizeFromProps,
  color: colorFromProps,
}) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        fontSize: fontSizeFromProps || fontSize,
        color: colorFromProps || color,
      },
      displayName
    ),

    // override
    level: 6,
    className: cn(ClassName, className),
  })
}

H6.displayName = displayName

export type { Props } from './types'
export default H6
