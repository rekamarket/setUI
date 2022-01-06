import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { displayName as pureName } from './Pure'
import { NonSemantic } from '../../types'
import ProtoSet, { mimicryAs, Tag } from '../../ProtoSet'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'

export const displayName = `${pureName}.Mimic`

type AsLevelType = Exclude<Tag, 'var'>

interface Props extends NonSemantic {
  tag: AsLevelType
}

const Component: VFC<Props> = ({
  tag,
  className,
  children,
  fontSize: fontSizeFromProps,
  color: colorFromProps,
  ...rest
}) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    tag: mimicryAs<AsLevelType>(tag),

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
