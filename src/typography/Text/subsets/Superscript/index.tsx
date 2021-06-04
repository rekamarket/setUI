import { FC } from 'react'
import Component, { Props } from '../../Component'

const Superscript: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'sup',
  })

export default Superscript
