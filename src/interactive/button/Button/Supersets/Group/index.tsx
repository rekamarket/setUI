import React, { VFC } from 'react'
import cn from 'classnames'
import Flex from 'layout/Flex'
import GroupContext from '../../context/group'
import type { Props } from './types'
import { ClassName } from './styles.css'

const Group: VFC<Props> = ({
  size,
  theme,
  variant,
  children,
  className,
  ...flexProps
}) => {
  return (
    <Flex {...flexProps} className={cn(ClassName, className)}>
      <GroupContext.Provider
        value={{
          size,
          theme,
          variant,
        }}
      >
        {children}
      </GroupContext.Provider>
    </Flex>
  )
}

export default Group
