import { createContext, useContext } from 'react'
import { Theme } from '../../css'
import type { ThemeType } from '../../css'

export const Context = createContext<ThemeType>(Theme.default)
export const useTheme = () => useContext(Context)
