import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useFontSize } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Paragraph'

const Set: FC<Props> = ({ className, ...props }) => {
  const fontSize = useFontSize()

  return ProtoSet({
    ...object.mergePropsWithWarning<any>(defaultProps, props, displayName),

    // props override
    className: cn(ClassName, className),
    fontSize: props?.fontSize || fontSize || defaultProps.fontSize,
  })
}

Set.displayName = displayName

export default Set
