import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Props, Idiomatic as Set } from './Set'

type CompoundedComponent = ForwardRefExoticComponent<
  Props & RefAttributes<HTMLElement>
>

const Link = Set as CompoundedComponent

export { link } from './Set'
export type { Props } from './Set'
export default Link
