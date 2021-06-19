import { createContext, useContext } from 'react'
import { Radius } from '../ProtoSet/css'
import type { RadiusType } from '../ProtoSet/css'

export const Context = createContext<RadiusType>(Radius.default)
export const useRadius = () => useContext(Context)
