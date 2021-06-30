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
import { BoxLayerProps } from 'layers'

export type Props = {
  children?: JSX.Element | Array<JSX.Element>

  aspectRatio?: AspectRatioType

  zIndex?: ZIndexType
} & BoxLayerProps
