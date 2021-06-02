import { FC } from 'react'
import Component, { Props } from '../../Component'

const Strong: FC<Omit<Props, 'as' | 'weight'>> = (props) =>
  Component({
    ...props,
    as: 'strong',
    weight: 'bold',
  })

export default Strong
