import React, { VFC } from 'react'
import Component, { Props } from '../../Component'

const Large: VFC<Omit<Props, 'size'>> = (props) =>
  Component({
    size: 'large',
    ...props,
  })

export default Large
