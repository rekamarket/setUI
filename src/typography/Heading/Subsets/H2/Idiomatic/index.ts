import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'
import { ClassName } from '../styles.css'

export const displayName = 'H2'

const H2: VFC<Props> = ({
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
    level: 2,
    className: cn(ClassName, className),
  })
}

H2.displayName = displayName

export default H2
