import { FC } from 'react'
import Component, { Props } from '../../Component'

const DeletedText: FC<
  Omit<Props, 'as'> & { cite?: string; datetime?: string }
> = (props) =>
  Component({
    ...props,
    as: 'del',
  })

export default DeletedText
