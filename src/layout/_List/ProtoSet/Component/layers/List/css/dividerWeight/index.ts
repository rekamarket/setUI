import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const DividerWeightContext = createContext<Type>('default')
export const useDividerWeight = () => useContext(DividerWeightContext)

export {
  Style as DividerWeight,
  map as DividerWeightMap,
  Keys as DividerWeightKeys,
} from './styles.css'

export { resolve as dividerWeightResolve } from './resolve'
export type { Type as DividerWeightType } from './styles.css'
export type { DividerWeightProps } from './types'
