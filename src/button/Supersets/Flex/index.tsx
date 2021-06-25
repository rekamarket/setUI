import React, { VFC } from 'react'
import cn from 'classnames'
import FlexComponent from 'layout/Flex'
import {
  RadiusContext,
  ShapeContext,
  SizeContext,
  ThemeContext,
  VariantContext,
} from '../../ProtoSet/css'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Flex: VFC<Props> = ({
  radius,
  shape,
  size,
  theme,
  variant,
  className,
  ...flexProps
}) =>
  [
    <VariantContext.Provider value={variant} />,
    <ThemeContext.Provider value={theme} />,
    <SizeContext.Provider value={size} />,
    <ShapeContext.Provider value={shape} />,
    <RadiusContext.Provider value={radius} />,
    <FlexComponent {...flexProps} className={cn(ClassName, className)} />,
  ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev))

export type { Props } from './types'
export default Flex
