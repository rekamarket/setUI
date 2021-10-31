import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const CharsPerLineContext = createContext<Type>(undefined)
export const useCharsPerLine = () => useContext(CharsPerLineContext)

export {
  Style as CharsPerLine,
  map as CharsPerLineMap,
  Keys as CharsPerLineKeys,
} from './styles.css'

export { resolve as charsPerLineResolve } from './resolve'
export type { Type as CharsPerLineType } from './styles.css'
export type { CharsPerLineProps } from './types'
