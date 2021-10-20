import { createContext, useContext } from 'react'
import type { Type } from './styles.css'

export const OverlayContext = createContext<Type>(undefined)
export const useOverlay = () => useContext(OverlayContext)

export {
  Style as Overlay,
  map as OverlayMap,
  Keys as OverlayKeys,
} from './styles.css'

export { resolve as overlayResolve } from './resolve'
export type { Type as OverlayType } from './styles.css'
export type { OverlayProps } from './types'
