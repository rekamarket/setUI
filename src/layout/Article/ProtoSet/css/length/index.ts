import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const LengthContext = createContext<Type>(undefined)
export const useLength = () => useContext(LengthContext)

export {
  Style as Length,
  map as LengthMap,
  Keys as LengthKeys,
} from './styles.css'

export { resolve as lengthResolve } from './resolve'
export type { Type as LengthType } from './styles.css'
export type { LengthProps } from './types'
