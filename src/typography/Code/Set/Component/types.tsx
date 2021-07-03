import type { DisplayType } from 'CSS'
import type { BlockLayerProps, TextLayerProps } from 'layers'

export type AsType = 'code' | 'var' | 'kbd' | 'samp'

type BasicProps = {
  className?: string
  title?: string
}

type StyleProps = {
  as?: AsType
  display?: DisplayType
} & BlockLayerProps &
  TextLayerProps

export type Props = BasicProps & StyleProps
export type PropsRequired = BasicProps & Required<StyleProps>
