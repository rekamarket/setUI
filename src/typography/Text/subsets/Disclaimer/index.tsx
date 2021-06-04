import { FC } from 'react'
import Component, { Props } from '../../Component'

const Disclaimer: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'small',
  })

export default Disclaimer
