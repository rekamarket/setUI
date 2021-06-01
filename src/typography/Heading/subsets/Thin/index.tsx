import { FC } from 'react'
import Component, { Props } from '../../Component/Heading'

const Thin: FC<Omit<Props, 'weight'>> = (props) =>
  Component({
    weight: 'normal',
    ...props,
  })

export default Thin
