import { AlignContentKeys } from './alignContent'
import { AlignItemsKeys } from './alignItems'
import { FlexDirectionKeys } from './flexDirection'
import { FlexWrapKeys } from './flexWrap'
import { GapKeys } from './gap'
import { JustifyContentKeys } from './justifyContent'

export const argTypes = {
  alignContent: {
    options: AlignContentKeys,
    control: { type: 'select' },
  },
  alignItems: {
    options: AlignItemsKeys,
    control: { type: 'select' },
  },
  flexDirection: {
    options: FlexDirectionKeys,
    control: { type: 'select' },
  },
  flexWrap: {
    options: FlexWrapKeys,
    control: { type: 'select' },
  },
  gap: {
    options: GapKeys,
    control: { type: 'select' },
  },
  justifyContent: {
    options: JustifyContentKeys,
    control: { type: 'select' },
  },
}
