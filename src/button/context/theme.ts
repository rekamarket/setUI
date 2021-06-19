import { createContext, useContext } from 'react'
import { Theme } from '../ProtoSet/css'
import type { ThemeType } from '../ProtoSet/css'

export const Context = createContext<ThemeType>(Theme.default)
export const useTheme = () => useContext(Context)
