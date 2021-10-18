import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const MarkerContext = createContext<Type>('default')
export const useMarker = () => useContext(MarkerContext)

export {
  Style as Marker,
  map as MarkerMap,
  Keys as MarkerKeys,
} from './styles.css'

export { resolve as markerResolve } from './resolve'
export type { Type as MarkerType } from './styles.css'
export type { MarkerProps } from './types'
