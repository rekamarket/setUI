import React, { VFC } from 'react'
import cn from 'classnames'
import FlexComponent from 'layout/Flex'
import {
  Radius,
  radiusResolve,
  Shape,
  shapeResolve,
  Size,
  sizeResolve,
  Theme,
  themeResolve,
  VariantBasic,
  VariantContext,
  variantResolve,
} from '../../ProtoSet'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Group: VFC<Props> = ({
  radius,
  shape,
  size,
  theme,
  variant,
  className,
  ...flexProps
}) => {
  return [<VariantContext.Provider value="INHERIT" />].reduce(
    (prev, provider) => React.cloneElement(provider, {}, prev),
    <FlexComponent
      {...flexProps}
      className={cn(
        ClassName,
        className,
        Radius[radiusResolve(flexProps) || radius || 'default'],
        Size[shapeResolve(flexProps) || shape || 'default'],
        Theme[themeResolve(flexProps) || theme || 'default'],
        VariantBasic[variantResolve(flexProps) || variant || 'default']
      )}
    />
  )
}

export type { Props } from './types'
export default Group
