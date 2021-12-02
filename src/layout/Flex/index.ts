import { ForwardRefExoticComponent, RefAttributes } from 'react'
import Set, { Props } from './Set'
import { Center } from './Subsets'

interface CompoundedComponent
  extends ForwardRefExoticComponent<Props & RefAttributes<HTMLElement>> {
  Center: typeof Center
}

const Flex = Set as CompoundedComponent

Flex.Center = Center

export type { Props } from './Set'
export default Flex
