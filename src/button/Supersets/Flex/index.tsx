import React, { VFC } from 'react'
import cn from 'classnames'
import FlexComponent from 'layout/Flex'
import {
  RadiusContext,
  SizeContext,
  ThemeContext,
  VariantContext,
} from '../../context'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Flex: VFC<Props> = ({
  radius,
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
    <RadiusContext.Provider value={radius} />,
    <FlexComponent {...flexProps} className={cn(ClassName, className)} />,
  ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev))

export type { Props } from './types'
export default Flex
