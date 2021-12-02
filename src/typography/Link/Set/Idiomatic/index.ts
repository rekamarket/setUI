import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useFontSize } from 'layers'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Link'

const Link: VFC<Props> = ({
  children,
  href,
  className,
  color,
  fontSize: fontSizeFromProps,
  fontWeight,
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
      },
      displayName
    ),

    // props override
    href,
    className: cn(ClassName, className),
  })
}

Link.displayName = displayName

export type { Props } from './types'
export default Link
