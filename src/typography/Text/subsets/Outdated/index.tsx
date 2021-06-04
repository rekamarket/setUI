import { FC } from 'react'
import Component, { Props } from '../../Component'

const Outdated: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 's',
  })

export default Outdated
