import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const MarkerSizeContext = createContext<Type>('default')
export const useMarkerSize = () => useContext(MarkerSizeContext)

export {
  Style as MarkerSize,
  map as MarkerSizeMap,
  Keys as MarkerSizeKeys,
} from './styles.css'

export { resolve as markerSizeResolve } from './resolve'
export type { Type as MarkerSizeType } from './styles.css'
export type { MarkerSizeProps } from './types'
