import { ForwardRefExoticComponent, RefAttributes } from 'react'
import Set, { Props } from './Set'
import { FullBleed } from './Supersets'

interface CompoundedComponent
  extends ForwardRefExoticComponent<Props & RefAttributes<HTMLElement>> {
  FullBleed: typeof FullBleed
}

const Frame = Set as CompoundedComponent

Frame.FullBleed = FullBleed

export { ClassName as fullBleed } from './Supersets/FullBleed/styles.css'
export { ClassName as frame } from './Set/styles.css'
export type { Props } from './Set'
export default Frame
