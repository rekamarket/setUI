import React, { VFC, Children, createElement } from 'react'
import cn from 'classnames'
import {
  useDividerColor,
  useDividerOffset,
  useDividerWeight,
  DividerColor,
  DividerOffset,
  DividerWeight,
} from '../../css'
import { ClassName } from './styles.css'
import type { Props } from './types'

export const displayName = 'List.Divider'

const Divider: VFC<Props> = ({ className }) => {
  const dividerColor = useDividerColor()
  const dividerOffset = useDividerOffset()
  const dividerWeight = useDividerWeight()

  return (
    <hr
      className={cn([
        className,
        ClassName,
        DividerColor[dividerColor],
        DividerOffset[dividerOffset],
        DividerWeight[dividerWeight],
      ])}
    />
  )
}

Divider.displayName = displayName

export type { Props } from './types'

export default Divider
