import { FC } from 'react'
import Component, { Props } from '../../Component'

const Legend: FC<Omit<Props, 'as' | 'for'>> = (props) =>
  Component({
    ...props,
    as: 'legend',
  })

export default Legend
