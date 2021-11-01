import { Children, VFC } from 'react'
import cn from 'classnames'
import { defaultProps } from './defaultProps'
import ProtoSet from '../../Component'
import { Props } from './types'
import { ClassName } from './styles.css'

export const displayName = 'Spiral'

const Spiral: VFC<Props> = ({ className, children, ...props }) => {
  if (Children.count(children) === 3) {
    return ProtoSet({
      ...defaultProps,
      ...props,
      children,

      // override
      className: cn(ClassName, className),
    })
  }

  return <span>Spiral component should accept only 3 nodes</span>
}

Spiral.displayName = displayName

export default Spiral
