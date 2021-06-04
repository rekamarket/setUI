import { FC } from 'react'
import Component, { Props } from '../../Component'

const DeletedText: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'del',
  })

export default DeletedText
