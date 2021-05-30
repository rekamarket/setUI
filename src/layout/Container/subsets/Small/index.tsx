import { FC } from 'react'
import Component, { Props } from '../../Component'

const Small: FC<Omit<Props, 'size'>> = (props) =>
  Component({
    size: 'small',
    ...props,
  })

export default Small
