import { createContext, useContext } from 'react'
import { Size } from '../../css'
import type { SizeType } from '../../css'

export const Context = createContext<SizeType>(Size.default)
export const useSize = () => useContext(Context)
