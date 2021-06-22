import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const SizeContext = createContext<Type>('default')
export const useSize = () => useContext(SizeContext)

export { Style as Size, map as SizeMap, Keys as SizeKeys } from './styles.css'

export { resolve as sizeResolve } from './resolve'
export type { Type as SizeType } from './styles.css'
export type { SizeProps } from './types'
