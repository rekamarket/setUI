import type { ZIndexType, WidthType } from 'CSS'
import type { BlockLayerProps, FlexLayerProps } from 'layers'
import { DirectionProps, DividerColorProps, DividerWeightProps, MarkerProps, MarkerPositionProps} from '../css'

export type AsType = 'ul' | 'ol' | 'menu'

type BasicProps = {
  as: AsType
  value?: string
  children?: JSX.Element | Array<JSX.Element>
  className?: string
}

type Styles = BlockLayerProps &
  FlexLayerProps &
  DirectionProps &
  DividerColorProps &
  DividerWeightProps & MarkerProps & MarkerPositionProps

type StyleProps = {
  zIndex?: ZIndexType
  width?: WidthType
} & Styles

export type Props = BasicProps & StyleProps
export type PropsRequired = BasicProps & Required<StyleProps>
