import { VFC } from 'react'
import { Divider } from './ProtoSet/SubComponents'
import Set, { Props } from './Set'
import { Menu, Ordered, Unordered } from './Subsets'
// import { Abbreviation } from './Subsets'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends VFC<T> {
  // subcomponents
  Divider: typeof Divider

  // subsets
  Menu: typeof Menu
  Ordered: typeof Ordered
  Unordered: typeof Unordered
  // supersets
  // Placeholder: typeof Placeholder
}

const List: I<Props> = (props) => Set(props)
// subcomponents
List.Divider = Divider

// subsets
List.Menu = Menu
List.Ordered = Ordered
List.Unordered = Unordered

// supersets
// List.Placeholder = Placeholder

export type { Props } from './Set'
export default List
