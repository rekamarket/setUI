import { VFC } from 'react'
import { useColor, useFontSize } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Important'

const Important: VFC<Props> = (props) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...defaultProps,
    ...props,

    // override
    as: 'strong',
    color: props?.color || color || defaultProps.color,
    fontSize: props?.fontSize || fontSize || defaultProps.fontSize,
  })
}

Important.displayName = displayName

export default Important
