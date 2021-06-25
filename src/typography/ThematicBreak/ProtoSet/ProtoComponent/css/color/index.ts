import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const ColorContext = createContext<Type>(undefined)
export const useColor = () => useContext(ColorContext)

export {
  Style as Color,
  map as ColorMap,
  Keys as ColorKeys,
} from './styles.css'

export { resolve as colorResolve } from './resolve'
export type { Type as ColorType } from './styles.css'
export type { ColorProps } from './types'
