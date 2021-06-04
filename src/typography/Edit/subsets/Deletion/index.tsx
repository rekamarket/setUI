import { FC } from 'react'
import Component, { Props } from '../../Component'

const Deletion: FC<Omit<Props, 'as'> & { cite?: string; datetime?: string }> = (
  props
) =>
  Component({
    ...props,
    as: 'del',
  })

export default Deletion
