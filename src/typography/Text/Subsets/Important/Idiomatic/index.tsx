import { VFC } from 'react'
import { useFontSize } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Important'

const Important: VFC<Props> = (props) => {
  const fontSize = useFontSize()

  return ProtoSet({
    ...defaultProps,
    ...props,

    // override
    as: 'strong',
    fontSize: props?.fontSize || fontSize || defaultProps.fontSize,
  })
}

Important.displayName = displayName

export default Important
