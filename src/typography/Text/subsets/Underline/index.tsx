import { FC } from 'react'
import Component, { Props } from '../../Component'

const Underline: FC<Omit<Props, 'decoration'>> = (props) =>
  Component({
    ...props,
    decoration: 'underline',
  })

export default Underline
