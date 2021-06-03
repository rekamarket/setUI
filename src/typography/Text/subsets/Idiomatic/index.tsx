import { FC } from 'react'
import Component, { Props } from '../../Component'

const Idiomatic: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'i',
  })

export default Idiomatic
