import { FC } from 'react'
import Component, { Props } from '../../Component'

const Highlight: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'mark',
  })

export default Highlight
