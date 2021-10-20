import { Overlay, overlayResolve } from './overlay'
import type { Props, OverlayType } from './types'

class ShadowLayer {
  CSSoverlay: OverlayType

  public set(props: Props) {
    this.CSSoverlay = overlayResolve<Props>(props)

    return this
  }

  public get overlay() {
    return Overlay[this.CSSoverlay]
  }

  public get box() {
    return [this.overlay].filter(Boolean).join(' ')
  }
}

export { useOverlay, OverlayContext, OverlayKeys, OverlayMap } from './overlay'
export { argTypes, overlayArgTypes } from './storybook'
export type { Props } from './types'
export default ShadowLayer
