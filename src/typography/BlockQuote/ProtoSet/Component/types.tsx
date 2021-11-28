import type { Props as TextLayerProps } from 'reason/layers/Text'
import type { Props as BlockLayerProps } from 'reason/layers/Block'
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
