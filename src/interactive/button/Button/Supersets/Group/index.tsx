import React, { VFC } from 'react'
import GroupContext from '../../context/group'
import type { Props } from './types'

const Group: VFC<Props> = ({
  children,
  size = 'medium',
  theme = 'primary',
  variant = 'solid',
}) => {
  return (
    <GroupContext.Provider
      value={{
        size,
        theme,
        variant,
      }}
    >
      {children}
    </GroupContext.Provider>
  )
}

export default Group
