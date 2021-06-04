import { FC } from 'react'
import Component, { Props } from '../../Component'

const Citation: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'cite',
  })

export default Citation
