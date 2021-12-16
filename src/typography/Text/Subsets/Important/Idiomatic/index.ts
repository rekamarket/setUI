import { VFC } from 'react'
import { useFontSize } from 'layers'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Important'

const Important: VFC<Props> = ({
  className,
  children,
  fontSize: fontSizeFromProps,
  ...rest
}) => {
  const fontSize = useFontSize()

  return ProtoSet({
    className,
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
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
