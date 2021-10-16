import { SymbolKeys, SymbolGapKeys, SymbolSizeKeys } from './css'

export const argTypes = {
  symbol: {
    options: SymbolKeys,
    control: { type: 'select' },
  },
  symbolGap: {
    options: SymbolGapKeys,
    control: { type: 'select' },
  },
  symbolSize: {
    options: SymbolSizeKeys,
    control: { type: 'select' },
  },
}
