import type { BlockLayerProps, TextLayerProps } from 'layers'
import { SymbolProps, SymbolGapProps, SymbolSizeProps } from './css'

type BasicProps = {
  className?: string
  cite?: string
}

export type Props = BasicProps &
  TextLayerProps &
  SymbolProps &
  SymbolGapProps &
  SymbolSizeProps &
  BlockLayerProps
export type PropsRequired = BasicProps &
  Required<TextLayerProps> &
  SymbolProps &
  SymbolGapProps &
  SymbolSizeProps &
  Required<BlockLayerProps>
