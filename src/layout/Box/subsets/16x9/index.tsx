import { FC } from 'react'
import Set, { Props } from '../../set'

const Box16x9: FC<Omit<Props, 'aspectRatio'>> = (props) =>
  Set({
    aspectRatio: '16x9',
    ...props,
  })

export default Box16x9
