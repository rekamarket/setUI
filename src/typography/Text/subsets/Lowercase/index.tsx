import { FC } from 'react'
import Component, { Props } from '../../Component'

const Lowercase: FC<Omit<Props, 'transform'>> = (props) =>
  Component({
    ...props,
    transform: 'lowercase',
  })

export default Lowercase
