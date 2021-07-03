import type { BlockLayerProps, TextLayerProps } from 'layers'

export type AsType = 'del' | 'ins'

type BasicProps = {
  cite?: string
  datetime?: string
  className?: string
}

type StyleProps = {
  as?: AsType
} & BlockLayerProps &
  TextLayerProps

export type Props = BasicProps & StyleProps
export type PropsRequired = BasicProps & Required<StyleProps>
