import { FC } from 'react'
import Component, { Props } from '../../Component'

const LineThrough: FC<Omit<Props, 'decoration'>> = (props) =>
  Component({
    ...props,
    decoration: 'lineThrough',
  })

export default LineThrough
