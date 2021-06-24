import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const ShapeContext = createContext<Type>('default')
export const useShape = () => useContext(ShapeContext)

export {
  Style as Shape,
  map as ShapeMap,
  Keys as ShapeKeys,
} from './styles.css'

export { resolve as shapeResolve } from './resolve'
export type { Type as ShapeType } from './styles.css'
export type { ShapeProps } from './types'
