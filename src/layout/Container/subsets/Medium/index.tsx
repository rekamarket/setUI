import { FC } from 'react'
import Component, { Props } from '../../Component'

const Medium: FC<Omit<Props, 'size'>> = (props) =>
  Component({
    size: 'medium',
    ...props,
  })

export default Medium
