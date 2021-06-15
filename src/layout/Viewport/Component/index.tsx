import React, { VFC } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles.css'

const Viewport: VFC<Props> = ({ children }) => {
  return <div className={cn(ClassName)}>{children}</div>
}

export default Viewport
