import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const AxisContext = createContext<Type>(undefined)
export const useAxis = () => useContext(AxisContext)

export { Style as Axis, map as AxisMap, Keys as AxisKeys } from './styles.css'

export { resolve as axisResolve } from './resolve'
export type { Type as AxisType } from './styles.css'
export type { AxisProps } from './types'
