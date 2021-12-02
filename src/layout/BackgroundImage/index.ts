import { ForwardRefExoticComponent, RefAttributes } from 'react'
import Set, { Props } from './Set'
import { Cover } from './Supersets'

interface CompoundedComponent
  extends ForwardRefExoticComponent<Props & RefAttributes<HTMLElement>> {
  Cover: typeof Cover
}

const BackgroundImage = Set as CompoundedComponent

BackgroundImage.Cover = Cover

export { Cover } from './Supersets'
export type { Props } from './Set'
export default BackgroundImage
