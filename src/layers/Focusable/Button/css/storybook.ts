import { ShapeKeys } from './shape'
import { SizeKeys } from './size'
import { VariantKeys } from './variant'

export const argTypes = {
  Shape: {
    options: ShapeKeys,
    control: { type: 'select' },
  },
  Size: {
    options: SizeKeys,
    control: { type: 'select' },
  },
  Variant: {
    options: VariantKeys,
    control: { type: 'select' },
  },
}
