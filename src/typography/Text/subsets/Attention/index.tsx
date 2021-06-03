import { FC } from 'react'
import Component, { Props } from '../../Component'

const Attention: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'b',
  })

export default Attention
