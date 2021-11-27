import type { BlockLayerProps } from 'layers'
import type { Props as TextLayerProps } from 'reason/layers/Text'
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
