import {
  Symbol,
  symbolResolve,
  SymbolGap,
  symbolGapResolve,
  SymbolSize,
  symbolSizeResolve,
} from './css'

import type {
  Config,
  Props,
  SymbolType,
  SymbolGapType,
  SymbolSizeType,
} from './types'

class SymbolLayer {
  style: () => string
  symbol: SymbolType
  symbolGap: SymbolGapType
  symbolSize: SymbolSizeType

  constructor(config?: Config) {
    this.style = () => {
      return [
        Symbol[this.symbol],
        SymbolGap[this.symbolGap],
        SymbolSize[this.symbolSize],
      ]
        .filter(Boolean)
        .join(' ')
    }
  }

  public set(props: Props) {
    this.symbol = symbolResolve<Props>(props)
    this.symbolGap = symbolGapResolve<Props>(props)
    this.symbolSize = symbolSizeResolve<Props>(props)

    return this
  }

  public get box() {
    return [this.style()].filter(Boolean).join(' ')
  }
}

export { argTypes } from './storybook'
export type { Props } from './types'
export default SymbolLayer
