import { FC } from 'react'
import Component, { Props } from '../../Component'

const Thin: FC<Omit<Props, 'weight'>> = (props) =>
  Component({
    ...props,
    weight: 'thin',
  })

export default Thin
