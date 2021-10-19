import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const MarkerGapContext = createContext<Type>('default')
export const useMarkerGap = () => useContext(MarkerGapContext)

export {
  Style as MarkerGap,
  map as MarkerGapMap,
  Keys as MarkerGapKeys,
} from './styles.css'

export { resolve as markerGapResolve } from './resolve'
export type { Type as MarkerGapType } from './styles.css'
export type { MarkerGapProps } from './types'
