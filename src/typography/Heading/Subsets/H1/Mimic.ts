import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { displayName as pureName } from './Pure'
import { NonRepresentation, MinimumRepresentation } from '../../types'
import ProtoSet from '../../ProtoSet'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'

export const displayName = `${pureName}.Mimic`

type AsLevelType = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'

interface MimicProps {
  as: AsLevelType
}

const Component: VFC<
  MimicProps & NonRepresentation & MinimumRepresentation
> = ({
  as,
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
    level: as,
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component
