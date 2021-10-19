import {
  Direction,
  directionResolve,
  DividerColor,
  dividerColorResolve,
  DividerOffset,
  dividerOffsetResolve,
  DividerWeight,
  dividerWeightResolve,
  Marker,
  markerResolve,
  MarkerGap,
  markerGapResolve,
  MarkerPosition,
  markerPositionResolve,
  MarkerSize,
  markerSizeResolve,
} from './css'

import type {
  Config,
  Props,
  DirectionType,
  DividerColorType,
  DividerOffsetType,
  DividerWeightType,
  MarkerType,
  MarkerGapType,
  MarkerPositionType,
  MarkerSizeType,
} from './types'

class SymbolLayer {
  style: () => string
  direction: DirectionType
  dividerColor: DividerColorType
  dividerOffset: DividerOffsetType
  dividerWeight: DividerWeightType
  marker: MarkerType
  markerGap: MarkerGapType
  markerPosition: MarkerPositionType
  markerSize: MarkerSizeType

  constructor(config?: Config) {
    this.style = () => {
      return [
        Direction[this.direction],
        DividerColor[this.dividerColor],
        DividerOffset[this.dividerOffset],
        DividerWeight[this.dividerWeight],
        Marker[this.marker],
        MarkerGap[this.markerGap],
        MarkerPosition[this.markerPosition],
        MarkerSize[this.markerSize],
      ]
        .filter(Boolean)
        .join(' ')
    }
  }

  public set(props: Props) {
    this.direction = directionResolve<Props>(props)
    this.dividerColor = dividerColorResolve<Props>(props)
    this.dividerOffset = dividerOffsetResolve<Props>(props)
    this.dividerWeight = dividerWeightResolve<Props>(props)
    this.marker = markerResolve<Props>(props)
    this.markerGap = markerGapResolve<Props>(props)
    this.markerPosition = markerPositionResolve<Props>(props)
    this.markerSize = markerSizeResolve<Props>(props)
    return this
  }

  public get box() {
    return [this.style()].filter(Boolean).join(' ')
  }
}

export { argTypes } from './storybook'
export type { Props } from './types'
export default SymbolLayer
