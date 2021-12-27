import { VFC } from 'react'
import { useColor, useFontSize } from 'layers'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Important'

const Important: VFC<Props> = ({
  className,
  children,
  color: colorFromProps,
  fontSize: fontSizeFromProps,
  ...rest
}) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    className,
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        color: colorFromProps || color,
        fontSize: fontSizeFromProps || fontSize,
        ...rest,
      },
      displayName
    ),

    // override
    as: 'strong',
  })
}

Important.displayName = displayName

export default Important
