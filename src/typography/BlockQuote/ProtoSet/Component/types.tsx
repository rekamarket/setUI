import type { BlockLayerProps, TextLayerProps } from 'layers'
import { SymbolProps } from './layers'

type BasicProps = {
  className?: string
  cite?: string
}

export type Props = BasicProps & TextLayerProps & SymbolProps & BlockLayerProps
export type PropsRequired = BasicProps &
  Required<TextLayerProps> &
  SymbolProps &
  Required<BlockLayerProps>
