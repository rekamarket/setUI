import React, { VFC } from 'react'
import cn from 'classnames'
import FlexComponent from 'layout/Flex'
import {
  RadiusContext,
  ShapeContext,
  SizeContext,
  ThemeContext,
  VariantContext,
} from 'layers/Button'
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
    <RadiusContext.Provider value={radius} />,
    <ShapeContext.Provider value={shape} />,
    <SizeContext.Provider value={size} />,
    <ThemeContext.Provider value={theme} />,
    <VariantContext.Provider value={variant} />,
  ].reduce(
    (prev, provider) => React.cloneElement(provider, {}, prev),
    <FlexComponent {...flexProps} className={cn(ClassName, className)} />
  )

export type { Props } from './types'
export default Flex
