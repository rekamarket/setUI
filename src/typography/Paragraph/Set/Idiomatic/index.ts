import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useFontSize } from 'layers'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Paragraph'

const Set: VFC<Props> = ({
  children,
  className,
  color,
  fontSize: fontSizeFromProps,
  fontWeight,
  ...rest
}) => {
  const fontSize = useFontSize()

  return ProtoSet({
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        color,
        fontSize: fontSizeFromProps || fontSize,
        fontWeight,
        ...rest,
      },
      displayName
    ),

    // props override
    as: 'p',
    className: cn(ClassName, className),
  })
}

Set.displayName = displayName

export default Set