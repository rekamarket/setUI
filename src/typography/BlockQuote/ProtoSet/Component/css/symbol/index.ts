import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const SymbolContext = createContext<Type>('default')
export const useSymbol = () => useContext(SymbolContext)

export {
  Style as Symbol,
  map as SymbolMap,
  Keys as SymbolKeys,
} from './styles.css'

export { resolve as symbolResolve } from './resolve'
export type { Type as SymbolType } from './styles.css'
export type { SymbolProps } from './types'
