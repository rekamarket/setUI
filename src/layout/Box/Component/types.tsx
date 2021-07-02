import type {
  AspectRatioType,
  BackgroundColorType,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  MarginSizeType,
  PaddingSizeType,
  ZIndexType,
} from 'CSS'
import { BlockLayerProps } from 'layers'

export type Props = {
  children?: JSX.Element | Array<JSX.Element>

  aspectRatio?: AspectRatioType

  zIndex?: ZIndexType
} & BlockLayerProps
