import { createContext, useContext } from 'react'
import { Size } from '../ProtoSet/css'
import type { SizeType } from '../ProtoSet/css'

export const Context = createContext<SizeType>(Size.default)
export const useSize = () => useContext(Context)
