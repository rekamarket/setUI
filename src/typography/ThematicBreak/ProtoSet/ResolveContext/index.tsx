import { VFC } from 'react'
import cn from 'classnames'
import { useAxis, useColor, useOffset, useWeight } from '../ProtoComponent'
import { Props } from './types'
import Component from '../ResolveDefaultStyles'
import { ClassName } from './styles.css'

const ContextComponent: VFC<Props> = ({ className, ...rest }) => {
  const axis = useAxis()
  const color = useColor()
  const offset = useOffset()
  const weight = useWeight()

  return Component({
    ...rest,
    className: cn(ClassName, className),
    axis: rest?.axis || axis,
    color: rest?.color || color,
    offset: rest?.offset || offset,
    weight: rest?.weight || weight,
  })
}

export type { Props } from './types'
export default ContextComponent
