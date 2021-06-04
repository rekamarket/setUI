import { FC } from 'react'
import Component, { Props } from '../../Component'

const Variable: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'var',
  })

export default Variable
