import { FC } from 'react'
import Component, { Props } from '../../Component'

const Label: FC<Omit<Props, 'as'> & { for?: string }> = (props) =>
  Component({
    ...props,
    as: 'label',
  })

export default Label
