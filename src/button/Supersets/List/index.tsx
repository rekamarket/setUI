import React, { VFC } from 'react'
import cn from 'classnames'
import ListComponent from 'layout/List'
import {
  RadiusContext,
  SizeContext,
  ThemeContext,
  VariantContext,
} from '../../ProtoSet/css'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import { ClassName } from './styles.css'

const List: VFC<Props> = ({
  radius,
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
    <RadiusContext.Provider value={radius} />,
    <ListComponent
      {...defaultProps}
      {...listProps}
      className={cn(ClassName, className)}
    />,
  ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev))

export type { Props } from './types'
export default List
