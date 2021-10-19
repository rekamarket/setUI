import {
  DirectionKeys,
  DividerColorKeys,
  DividerOffsetKeys,
  DividerWeightKeys,
  MarkerKeys,
  MarkerGapKeys,
  MarkerPositionKeys,
  MarkerSizeKeys,
} from './css'

export const argTypes = {
  direction: {
    options: DirectionKeys,
    control: { type: 'select' },
  },
  dividerColor: {
    options: DividerColorKeys,
    control: { type: 'select' },
  },
  dividerOffset: {
    options: DividerOffsetKeys,
    control: { type: 'select' },
  },
  dividerWeight: {
    options: DividerWeightKeys,
    control: { type: 'select' },
  },
  marker: {
    options: MarkerKeys,
    control: { type: 'select' },
  },
  markerGap: {
    options: MarkerGapKeys,
    control: { type: 'select' },
  },
  markerPosition: {
    options: MarkerPositionKeys,
    control: { type: 'select' },
  },
  markerSize: {
    options: MarkerSizeKeys,
    control: { type: 'select' },
  },
}
