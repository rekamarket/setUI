import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Text'

const Text: VFC<Props> = ({
  children,
  className,
  color,
  fontSize,
  fontWeight,
}) =>
  ProtoSet({
    children,

    ...object.mergePropsWithWarning(
      defaultProps,
      {
        color,
        fontSize,
        fontWeight,
      },
      displayName
    ),

    // props override
    as: 'span',
    className: cn(ClassName, className),
  })

Text.displayName = displayName

export type { Props } from './types'
export default Text
