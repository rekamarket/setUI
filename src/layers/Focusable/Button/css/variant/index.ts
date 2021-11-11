import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const VariantContext = createContext<Type>(undefined)
export const useVariant = () => useContext(VariantContext)

export {
  Style as Variant,
  BasicStyle as VariantBasic,
  map as VariantMap,
  Keys as VariantKeys,
} from './styles.css'

export { resolve as variantResolve } from './resolve'
export type { Type as VariantType } from './styles.css'
export type { VariantProps } from './types'
