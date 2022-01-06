import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'
import { NonRepresentation, MinimumRepresentation } from '../../types'
import ProtoSet from '../../ProtoSet'

export const displayName = 'UnarticulatedAnnotation'

export type Props = NonRepresentation & MinimumRepresentation

const Component: VFC<Props> = ({
  className,
  children,
  fontSize: fontSizeFromProps,
  color: colorFromProps,
  ...rest
}) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...object.mergePropsWithWarning(
      defaultProps,
      {
        fontSize: fontSizeFromProps || fontSize,
        color: colorFromProps || color,
        ...rest,
      },
      displayName
    ),

    // override
    tag: 'u',
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component
