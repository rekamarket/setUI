import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const MarkerPositionContext = createContext<Type>('default')
export const useMarkerPosition = () => useContext(MarkerPositionContext)

export {
  Style as MarkerPosition,
  map as MarkerPositionMap,
  Keys as MarkerPositionKeys,
} from './styles.css'

export { resolve as markerPositionResolve } from './resolve'
export type { Type as MarkerPositionType } from './styles.css'
export type { MarkerPositionProps } from './types'
