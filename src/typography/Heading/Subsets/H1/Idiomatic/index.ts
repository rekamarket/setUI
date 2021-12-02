import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'
import { ClassName } from '../styles.css'

export const displayName = 'H1'

const H1: VFC<Props> = ({
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
    level: 1,
    className: cn(ClassName, className),
  })
}

H1.displayName = displayName

export default H1
