import { FC } from 'react'
import Component, { Props } from '../../Component'

const Emphasis: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'strong',
  })

export default Emphasis
