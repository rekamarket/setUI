import { VFC } from 'react'
import cn from 'classnames'
import {
  useShape,
  useSize,
  useTheme,
  useVariant,
} from 'layers/Focusable/Button/Button'
import { Props } from './types'
import Component from '../ResolveDefaultStyles'
import { ClassName } from './styles.css'

const Button: VFC<Props> = ({ className, ...rest }) => {
  const shape = useShape()
  const size = useSize()
  const theme = useTheme()
  const variant = useVariant()

  return Component({
    ...rest,
    className: cn(ClassName, className),
    shape: rest?.shape || shape,
    size: rest?.size || size,
    theme: rest?.theme || theme,
    variant: rest?.variant || variant,
  })
}

export type { Props } from './types'
export default Button
