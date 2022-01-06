import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'
import { displayName as pureName } from './Pure'
import type { NonSemantic } from '../../types'
import ProtoSet from '../../ProtoSet'

export const displayName = `TextContainer.${pureName}`

const Component: VFC<NonSemantic> = ({
  children,
  className,
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

    // props override
    tag: 'div',
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component
