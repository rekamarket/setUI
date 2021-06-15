import React, { VFC } from 'react'
import Component, { Props } from '../../Component'

const Small: VFC<Omit<Props, 'size'>> = (props) =>
  Component({
    size: 'small',
    ...props,
  })

export default Small
