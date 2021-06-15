import { createContext, useContext } from 'react'
import { Variant } from '../../css'
import type { VariantType } from '../../css'

export const Context = createContext<VariantType>(Variant.default)
export const useVariant = () => useContext(Context)
