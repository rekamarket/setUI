import React, { VFC } from 'react'
import Component, { Props } from '../../Component'

const x16x9: VFC<Omit<Props, 'aspectRatio'>> = (props) =>
  Component({
    aspectRatio: '16x9',
    ...props,
  })

export default x16x9
