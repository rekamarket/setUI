import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const DividerColorContext = createContext<Type>('default')
export const useDividerColor = () => useContext(DividerColorContext)

export {
  Style as DividerColor,
  map as DividerColorMap,
  Keys as DividerColorKeys,
} from './styles.css'

export { resolve as dividerColorResolve } from './resolve'
export type { Type as DividerColorType } from './styles.css'
export type { DividerColorProps } from './types'
