import { createContext, useContext } from 'react'
import type { SizeType } from '../ProtoSet/css'

export const Context = createContext<SizeType>('default')
export const useSize = () => useContext(Context)
