import React, { VFC } from 'react'
import cn from 'classnames'
import FlexComponent from 'layout/Flex'
import GroupContext from '../../context/group'
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
      <GroupContext.Provider
        value={{
          size,
          theme,
          variant,
        }}
      >
        {children}
      </GroupContext.Provider>
    </FlexComponent>
  )
}

export default Flex
