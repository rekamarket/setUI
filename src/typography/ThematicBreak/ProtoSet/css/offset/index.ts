import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const OffsetContext = createContext<Type>(undefined)
export const useOffset = () => useContext(OffsetContext)

export {
  Style as Offset,
  map as OffsetMap,
  Keys as OffsetKeys,
} from './styles.css'

export { resolve as offsetResolve } from './resolve'
export type { Type as OffsetType } from './styles.css'
export type { OffsetProps } from './types'
