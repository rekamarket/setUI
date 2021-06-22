import { VFC } from 'react'
import cn from 'classnames'
import { useRadius, useSize, useTheme, useVariant } from '../css'
import { PropsRequired } from './types'
import Component from '../Component'
import { ClassName } from './styles.css'

const Button: VFC<PropsRequired> = (props) => {
  const radius = useRadius()
  const size = useSize()
  const theme = useTheme()
  const variant = useVariant()

  return Component({
    radius: props?.radius || radius,
    size: props?.size || size,
    theme: props?.theme || theme,
    variant: props?.variant || variant,
    ...props,
  })
}

export type { Props } from './types'

export default Button
