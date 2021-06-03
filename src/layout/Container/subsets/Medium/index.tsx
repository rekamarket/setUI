import { VFC } from 'react'
import Component, { Props } from '../../Component'

const Medium: VFC<Omit<Props, 'size'>> = (props) =>
  Component({
    size: 'medium',
    ...props,
  })

export default Medium
