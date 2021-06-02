import { FC } from 'react'
import Component, { Props } from '../../Component'

const Uppercase: FC<Omit<Props, 'transform'>> = (props) =>
  Component({
    ...props,
    transform: 'uppercase',
  })

export default Uppercase
