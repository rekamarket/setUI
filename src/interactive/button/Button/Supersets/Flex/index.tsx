import React, { VFC } from 'react'
import cn from 'classnames'
import FlexComponent from 'layout/Flex'
import { SizeContext, ThemeContext, VariantContext } from '../../context'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Flex: VFC<Props> = ({
  size,
  theme,
  variant,
  children,
  className,
  ...flexProps
}) => {
  return (
    <FlexComponent {...flexProps} className={cn(ClassName, className)}>
      <SizeContext.Provider value={size}>
        <ThemeContext.Provider value={theme}>
          <VariantContext.Provider value={variant}>
            {children}
          </VariantContext.Provider>
        </ThemeContext.Provider>
      </SizeContext.Provider>
    </FlexComponent>
  )
}

export default Flex
