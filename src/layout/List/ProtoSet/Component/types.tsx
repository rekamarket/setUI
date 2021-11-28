import type { ZIndexType, WidthType } from 'CSS'
import type { BlockLayerProps } from 'layers'
import type { Props as FlexLayerProps } from 'reason/layers/Flex'
import { ListProps } from './layers'
export type AsType = 'ul' | 'ol' | 'menu'

type BasicProps = {
  as: AsType
  value?: string
  children?: JSX.Element | Array<JSX.Element>
  className?: string
}

type Styles = BlockLayerProps & FlexLayerProps & ListProps

type StyleProps = {
  zIndex?: ZIndexType
  width?: WidthType
} & Styles

export type Props = BasicProps & StyleProps
export type PropsRequired = BasicProps & Required<StyleProps>
