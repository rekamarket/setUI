import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const RadiusContext = createContext<Type>('default')
export const useRadius = () => useContext(RadiusContext)

export {
  Style as Radius,
  map as RadiusMap,
  Keys as RadiusKeys,
} from './styles.css'

export { resolve as radiusResolve } from './resolve'
export type { Type as RadiusType } from './styles.css'
export type { RadiusProps } from './types'
