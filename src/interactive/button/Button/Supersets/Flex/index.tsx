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
  children,
  className,
  ...flexProps
}) => {
  return (
    <FlexComponent {...flexProps} className={cn(ClassName, className)}>
      <RadiusContext.Provider value={radius}>
        <SizeContext.Provider value={size}>
          <ThemeContext.Provider value={theme}>
            <VariantContext.Provider value={variant}>
              {children}
            </VariantContext.Provider>
          </ThemeContext.Provider>
        </SizeContext.Provider>
      </RadiusContext.Provider>
    </FlexComponent>
  )
}

export default Flex
