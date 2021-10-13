import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const SymbolSizeContext = createContext<Type>('default')
export const useSymbolSize = () => useContext(SymbolSizeContext)

export {
  Style as SymbolSize,
  map as SymbolSizeMap,
  Keys as SymbolSizeKeys,
} from './styles.css'

export { resolve as symbolSizeResolve } from './resolve'
export type { Type as SymbolSizeType } from './styles.css'
export type { SymbolSizeProps } from './types'
