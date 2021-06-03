import { VFC } from 'react'
import Component, { Props } from '../../Component/Segment'

const Column: VFC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: 'column',
    ...props,
  })

export default Column
