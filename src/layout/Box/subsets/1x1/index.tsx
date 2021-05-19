import { FC } from 'react'
import Set, { Props } from '../../set'

const Box1x1: FC<Omit<Props, 'aspectRatio'>> = (props) =>
  Set({
    aspectRatio: '1x1',
    ...props,
  })

export default Box1x1
