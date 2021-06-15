import React, { VFC } from 'react'
import Component, { Props } from '../../Component'

const x4x3: VFC<Omit<Props, 'aspectRatio'>> = (props) =>
  Component({
    aspectRatio: '4x3',
    ...props,
  })

export default x4x3
