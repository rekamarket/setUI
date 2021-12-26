import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'
import { Semantic, NonRepresentation, MinimumRepresentation } from '../types'
import ProtoSet from '../ProtoSet'

export const displayName = 'H'

export interface Props
  extends Pick<Semantic, 'level'>,
    NonRepresentation,
    MinimumRepresentation {}

const Component: VFC<Props> = ({
  level = 1,
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
    OVERRIDE_TAG_SEMANTICS: false,
    level,
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component
