import { FC } from 'react'
import Component, { Props } from '../../Component'

const Capitalize: FC<Omit<Props, 'transform'>> = (props) =>
  Component({
    ...props,
    transform: 'capitalize',
  })

export default Capitalize
