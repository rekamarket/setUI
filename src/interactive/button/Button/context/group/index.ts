import { createContext, useContext } from 'react'
import type { SizeProps, ThemeProps, VariantProps } from '../../../css'

export type Props = SizeProps & ThemeProps & VariantProps

const Context = createContext<Props>({})

export const useSize = () => useContext(Context)

export default Context
