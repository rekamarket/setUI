import { FC } from 'react'
import Set, { Props } from '../../set'

const Box4x3: FC<Omit<Props, 'aspectRatio'>> = (props) =>
  Set({
    aspectRatio: '4x3',
    ...props,
  })

export default Box4x3
