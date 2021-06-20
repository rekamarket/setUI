import { createContext, useContext } from 'react'
import type { VariantType } from '../ProtoSet/css'

export const Context = createContext<VariantType>('default')
export const useVariant = () => useContext(Context)
