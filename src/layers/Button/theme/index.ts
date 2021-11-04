import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const ThemeContext = createContext<Type>(undefined)
export const useTheme = () => useContext(ThemeContext)

export {
  Style as Theme,
  map as ThemeMap,
  Keys as ThemeKeys,
} from './styles.css'

export { resolve as themeResolve } from './resolve'
export type { Type as ThemeType } from './styles.css'
export type { ThemeProps } from './types'
