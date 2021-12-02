import { VFC } from 'react'
import { useFontSize } from 'layers'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'TextInline'

const TextInline: VFC<Props> = ({
  className,
  children,
  fontSize: fontSizeFromProps,
}) => {
  const fontSize = useFontSize()

  return ProtoSet({
    className,
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        fontSize: fontSizeFromProps || fontSize,
      },
      displayName
    ),

    // override
    as: 'span',
  })
}

TextInline.displayName = displayName

export default TextInline
