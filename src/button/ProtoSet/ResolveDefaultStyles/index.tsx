import { VFC } from 'react'
import cn from 'classnames'
import { textTransformResolve } from 'CSS'
import ProtoComponent, {
  radiusResolve,
  shapeResolve,
  sizeResolve,
  themeResolve,
  variantResolve,
} from '../ProtoComponent'
import type { Props } from './types'
import { ClassName } from './styles.css'

const ButtonComponent: VFC<Props> = ({ defaultStyle, className, ...rest }) =>
  ProtoComponent({
    ...rest,
    className: cn(ClassName, className),
    radius:
      radiusResolve(rest) || rest?.radius || defaultStyle.radius || 'default',
    shape: shapeResolve(rest) || rest?.shape || defaultStyle.shape || 'default',
    size: sizeResolve(rest) || rest?.size || defaultStyle.size || 'default',
    theme: themeResolve(rest) || rest?.theme || defaultStyle.theme || 'default',
    transform:
      textTransformResolve(rest) ||
      rest?.transform ||
      defaultStyle.transform ||
      'default',
    variant:
      variantResolve(rest) ||
      rest?.variant ||
      defaultStyle.variant ||
      'default',
  })

export type { Props, DefaultStyleProps } from './types'
export default ButtonComponent
