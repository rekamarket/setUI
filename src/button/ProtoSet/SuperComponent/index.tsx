import { VFC } from 'react'
import cn from 'classnames'
import { useRadius, useShape, useSize, useTheme, useVariant } from '../css'
import { Props } from './types'
import Component from '../Component'
import { ClassName } from './styles.css'

const Button: VFC<Props> = ({ className, ...rest }) => {
  const radius = useRadius()
  const shape = useShape()
  const size = useSize()
  const theme = useTheme()
  const variant = useVariant()

  return Component({
    ...rest,
    className: cn(ClassName, className),
    radius: rest?.radius || radius,
    shape: rest?.shape || shape,
    size: rest?.size || size,
    theme: rest?.theme || theme,
    variant: rest?.variant || variant,
  })
}

export type { Props } from './types'
export default Button
