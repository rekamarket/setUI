import { OverlayKeys } from './overlay'

export const overlayArgTypes = {
  overlay: {
    options: OverlayKeys,
    control: { type: 'select' },
  },
}

export const argTypes = {
  ...overlayArgTypes,
}
