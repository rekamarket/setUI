import { FC } from 'react'
import Component, { Props } from '../../Component'

const InsertedText: FC<
  Omit<Props, 'as'> & { cite?: string; datetime?: string }
> = (props) =>
  Component({
    ...props,
    as: 'ins',
  })

export default InsertedText
