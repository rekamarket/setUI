import { FC } from 'react'
import { useColor, useFontSize } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H5'

const H5: FC<Props> = (props) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...defaultProps,
    ...props,

    // override
    level: 5,
    color: props?.color || color || defaultProps.color,
    fontSize: props?.fontSize || fontSize || defaultProps.fontSize,
  })
}

H5.displayName = displayName

export default H5
