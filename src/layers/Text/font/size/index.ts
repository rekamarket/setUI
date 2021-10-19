import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const FontSizeContext = createContext<Type>(undefined)
export const useFontSize = () => useContext(FontSizeContext)

export {
  Style as FontSize,
  map as FontSizeMap,
  Keys as FontSizeKeys,
} from './styles.css'

export { resolve as fontSizeResolve } from './resolve'
export type { Type as FontSizeType } from './styles.css'
export type { FontSizeProps } from './types'
