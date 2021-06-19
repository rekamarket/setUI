import { createContext, useContext } from 'react'
import { Variant } from '../ProtoSet/css'
import type { VariantType } from '../ProtoSet/css'

export const Context = createContext<VariantType>(Variant.default)
export const useVariant = () => useContext(Context)
