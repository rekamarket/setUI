import { createContext, useContext } from 'react'
import type { RadiusType } from '../ProtoSet/css'

export const Context = createContext<RadiusType>('default')
export const useRadius = () => useContext(Context)
