import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const SymbolGapContext = createContext<Type>('default')
export const useSymbolGap = () => useContext(SymbolGapContext)

export {
  Style as SymbolGap,
  map as SymbolGapMap,
  Keys as SymbolGapKeys,
} from './styles.css'

export { resolve as symbolGapResolve } from './resolve'
export type { Type as SymbolGapType } from './styles.css'
export type { SymbolGapProps } from './types'
