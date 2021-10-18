import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const DividerOffsetContext = createContext<Type>('default')
export const useDividerOffset = () => useContext(DividerOffsetContext)

export {
  Style as DividerOffset,
  map as DividerOffsetMap,
  Keys as DividerOffsetKeys,
} from './styles.css'

export { resolve as dividerOffsetResolve } from './resolve'
export type { Type as DividerOffsetType } from './styles.css'
export type { DividerOffsetProps } from './types'
