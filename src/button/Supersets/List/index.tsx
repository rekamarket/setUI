import React, { VFC } from 'react'
import cn from 'classnames'
import ListComponent from 'layout/List'
import {
  RadiusContext,
  ShapeContext,
  SizeContext,
  ThemeContext,
  VariantContext,
} from '../../ProtoSet'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import { ClassName } from './styles.css'

const List: VFC<Props> = ({
  radius,
  shape,
  size,
  theme,
  variant,
  className,
  ...listProps
}) =>
  [
    <RadiusContext.Provider value={radius} />,
    <ShapeContext.Provider value={shape} />,
    <SizeContext.Provider value={size} />,
    <ThemeContext.Provider value={theme} />,
    <VariantContext.Provider value={variant} />,
  ].reduce(
    (prev, provider) => React.cloneElement(provider, {}, prev),
    <ListComponent
      {...defaultProps}
      {...listProps}
      className={cn(ClassName, className)}
    />
  )

export type { Props } from './types'
export default List
