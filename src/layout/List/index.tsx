import { VFC } from 'react'
import Set, { Props } from './Set'
import { Menu, Ordered, Unordered } from './Subsets'
// import { Abbreviation } from './Subsets'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends VFC<T> {
  // subsets
  Menu: typeof Menu
  Ordered: typeof Ordered
  Unordered: typeof Unordered
  // supersets
  // Placeholder: typeof Placeholder
}

const List: I<Props> = (props) => Set(props)
// subsets
List.Menu = Menu
List.Ordered = Ordered
List.Unordered = Unordered

// supersets
// List.Placeholder = Placeholder

export { Unordered as UnorderedList } from './Subsets'
export { default as UnorderedSnippets } from './Subsets/Unordered/snippets'
export type { Props } from './Set'
export default List
