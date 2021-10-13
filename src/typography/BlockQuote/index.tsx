import { FC } from 'react'
import Set, { Props } from './Set'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // supersets
  // Placeholder: typeof Placeholder
}

const BlockQuote: I<Props> = (props) => Set(props)

// supersets
// Text.Placeholder = Placeholder

export type { Props } from './Set'
export default BlockQuote
