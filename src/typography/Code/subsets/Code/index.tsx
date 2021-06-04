import { FC } from 'react'
import Component, { Props } from '../../Component'

const Code: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'code',
  })

export default Code
