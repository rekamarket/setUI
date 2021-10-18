import React, { VFC } from 'react'
import cn from 'classnames'
import Component from '../Component'
import {
  DividerColorContext,
  DividerOffsetContext,
  DividerWeightContext,
} from '../css'
import type { Props } from './types'
import { ClassName } from './styles.css'

const ListSuperComponent: VFC<Props> = ({
  className,
  dividerColor,
  dividerOffset,
  dividerWeight,
  ...componentProps
}) =>
  [
    <DividerColorContext.Provider value={dividerColor} />,
    <DividerOffsetContext.Provider value={dividerOffset} />,
    <DividerWeightContext.Provider value={dividerWeight} />,
    <Component {...componentProps} className={cn(ClassName, className)} />,
  ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev))

export type { Props } from './types'
export default ListSuperComponent
