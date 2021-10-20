import { FC } from 'react'
import { useColor, useFontSize } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H2'

const H2: FC<Props> = (props) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...defaultProps,
    ...props,

    // override
    level: 2,
    color: props?.color || color || defaultProps.color,
    fontSize: props?.fontSize || fontSize || defaultProps.fontSize,
  })
}

H2.displayName = displayName

export default H2
