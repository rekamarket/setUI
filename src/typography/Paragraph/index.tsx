import { FC } from 'react'
import Set, { Props } from './Set'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // supersets
  // Placeholder: typeof Placeholder
}

const Paragraph: I<Props> = (props) => Set(props)

// supersets
// Paragraph.Placeholder = Placeholder

export default Paragraph
