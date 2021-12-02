import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Props, Idiomatic as Set } from './Set'

type CompoundedComponent = ForwardRefExoticComponent<
  Props & RefAttributes<HTMLElement>
>

const Time = Set as CompoundedComponent

export default Time
