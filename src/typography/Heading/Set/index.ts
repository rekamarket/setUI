import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { Props as ProtoProps, NodeProps } from '../types'
import ProtoSet from '../ProtoSet'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'

export const displayName = `Heading`

export type Props = Partial<Omit<ProtoProps, 'tag' | 'level'>> &
  Pick<ProtoProps, 'tag' | 'level'> &
  NodeProps

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
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component
export { ClassName as heading } from './styles.css'
export { defaultProps as styles } from './defaultProps'
