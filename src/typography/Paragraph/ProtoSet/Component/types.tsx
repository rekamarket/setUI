import type { ZIndexType } from 'CSS'
import type { PropsWithCFT as TextLayerProps } from 'reason/layers/Text'
import type { Props as BlockLayerProps } from 'reason/layers/Block'

export type AsType = 'p' | 'div'

export type Props = {
  as: AsType
  className?: string

  zIndex?: ZIndexType
} & BlockLayerProps &
  TextLayerProps
