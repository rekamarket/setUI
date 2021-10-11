import type { AspectRatioType, ZIndexType } from 'CSS'
import { BlockLayerProps } from 'layers'

export type AsType = 'div' | 'section'

export type Props = {
  as: AsType
  className?: string
  children?: JSX.Element | Array<JSX.Element>

  aspectRatio?: AspectRatioType

  zIndex?: ZIndexType
} & BlockLayerProps
