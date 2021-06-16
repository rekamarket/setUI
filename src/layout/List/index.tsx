import { VFC } from 'react'
import Set, { Props } from './Set'
// import { Abbreviation } from './Subsets'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends VFC<T> {
  // subsets
  // Abbreviation: typeof Abbreviation
  // supersets
  // Placeholder: typeof Placeholder
}

const List: I<Props> = (props) => Set(props)

// subsets
// Text.Abbreviation = Abbreviation

// supersets
// Text.Placeholder = Placeholder

export type { Props } from './Set'
export default List
