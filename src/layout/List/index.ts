import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Props, Idiomatic as Set } from './Set'
import { Menu, Ordered, Unordered } from './Subsets'

interface CompoundedComponent
  extends ForwardRefExoticComponent<Props & RefAttributes<HTMLElement>> {
  Menu: typeof Menu
  Ordered: typeof Ordered
  Unordered: typeof Unordered
}

const List = Set as CompoundedComponent

List.Menu = Menu
List.Ordered = Ordered
List.Unordered = Unordered

export {
  Unordered as UnorderedList,
  unorderedList,
  orderedList,
} from './Subsets'

export { ClassName as list } from './Set/styles.css'
export type { Props } from './Set'
export default List
