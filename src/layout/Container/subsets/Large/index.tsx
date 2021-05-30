import { FC } from 'react'
import Component, { Props } from '../../Component'

const Large: FC<Omit<Props, 'size'>> = (props) =>
  Component({
    size: 'large',
    ...props,
  })

export default Large
