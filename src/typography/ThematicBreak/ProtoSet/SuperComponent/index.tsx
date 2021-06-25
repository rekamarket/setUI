import { VFC } from 'react'
import cn from 'classnames'
import { useAxis, useColor, useOffset, useWeight } from '../css'
import { Props } from './types'
import Component from '../Component'
import { ClassName } from './styles.css'

const SuperComponent: VFC<Props> = ({ className, ...rest }) => {
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
export default SuperComponent
