import { FC } from 'react'
import Component, { Props } from '../../Component'

const Insertion: FC<Omit<Props, 'as'> & { cite?: string; datetime?: string }> =
  (props) =>
    Component({
      ...props,
      as: 'ins',
    })

export default Insertion
