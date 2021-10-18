import {
  DirectionKeys,
  DividerColorKeys,
  DividerOffsetKeys,
  DividerWeightKeys,
  MarkerKeys,
  MarkerPositionKeys,
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
  markerPosition: {
    options: MarkerPositionKeys,
    control: { type: 'select' },
  },
}
