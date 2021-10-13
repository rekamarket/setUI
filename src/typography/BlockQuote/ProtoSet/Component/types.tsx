import type { BlockLayerProps, TextLayerProps } from 'layers'
import { SymbolProps } from './css'

type BasicProps = {
  className?: string
  cite?: string
}

export type Props = BasicProps & BlockLayerProps & TextLayerProps & SymbolProps
export type PropsRequired = BasicProps &
  Required<BlockLayerProps> &
  Required<TextLayerProps> &
  SymbolProps
