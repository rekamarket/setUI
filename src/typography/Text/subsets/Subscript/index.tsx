import { FC } from 'react'
import Component, { Props } from '../../Component'

const Subscript: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'sub',
  })

export default Subscript
