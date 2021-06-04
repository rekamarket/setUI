import { FC } from 'react'
import Component, { Props } from '../../Component'

const QuoteBlock: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'blockquote',
  })

export default QuoteBlock
