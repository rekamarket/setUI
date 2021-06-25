import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const WeightContext = createContext<Type>(undefined)
export const useWeight = () => useContext(WeightContext)

export {
  Style as Weight,
  map as WeightMap,
  Keys as WeightKeys,
} from './styles.css'

export { resolve as weightResolve } from './resolve'
export type { Type as WeightType } from './styles.css'
export type { WeightProps } from './types'
