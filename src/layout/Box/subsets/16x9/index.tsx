import { FC } from 'react'
import Component, { Props } from '../../Component'

const x16x9: FC<Omit<Props, 'aspectRatio'>> = (props) =>
  Component({
    aspectRatio: '16x9',
    ...props,
  })

export default x16x9
