import type { Props, PaddingType } from './types'

export const defaultProps: Partial<Props> & PaddingType = {
  borderColor: 'grey160',
  borderWidth: 'thin',
  borderRadius: 'small',
  weight: 'bold',
  background: 'grey10',
  color: 'black',

  // PaddingType
  paddingY: 'xsmall',
  paddingX: 'xxsmall',
}
