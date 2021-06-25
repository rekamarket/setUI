import React, { VFC } from 'react'
import cn from 'classnames'
import ListComponent from 'layout/List'
import {
  RadiusContext,
  ShapeContext,
  SizeContext,
  ThemeContext,
  VariantContext,
} from '../../ProtoSet/css'
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
    <VariantContext.Provider value={variant} />,
    <ThemeContext.Provider value={theme} />,
    <SizeContext.Provider value={size} />,
    <ShapeContext.Provider value={shape} />,
    <RadiusContext.Provider value={radius} />,
    <ListComponent
      {...defaultProps}
      {...listProps}
      className={cn(ClassName, className)}
    />,
  ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev))

export type { Props } from './types'
export default List
