import { FC } from 'react'
import Component, { Props } from '../../Component'

const Time: FC<Omit<Props, 'as'> & { datetime: string }> = (props) =>
  Component({
    ...props,
    as: 'time',
  })

export default Time
