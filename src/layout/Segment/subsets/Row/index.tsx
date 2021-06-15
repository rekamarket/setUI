import React, { VFC } from 'react'
import Component, { Props } from '../../Component/Segment'

const Row: VFC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: 'row',
    ...props,
  })

export default Row
