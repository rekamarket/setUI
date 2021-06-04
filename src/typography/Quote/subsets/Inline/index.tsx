import { FC } from 'react'
import Component, { Props } from '../../Component'

const QuoteInline: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'q',
  })

export default QuoteInline
