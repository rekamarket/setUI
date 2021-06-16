import { createContext, useContext } from 'react'
import { Radius } from '../../css'
import type { RadiusType } from '../../css'

export const Context = createContext<RadiusType>(Radius.default)
export const useRadius = () => useContext(Context)
