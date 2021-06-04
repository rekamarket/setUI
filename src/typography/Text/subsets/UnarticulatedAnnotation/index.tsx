import { FC } from 'react'
import Component, { Props } from '../../Component'

const UnarticulatedAnnotation: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'u',
  })

export default UnarticulatedAnnotation
