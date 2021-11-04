import { RadiusKeys } from './radius'
import { ShapeKeys } from './shape'
import { SizeKeys } from './size'
import { ThemeKeys } from './theme'
import { VariantKeys } from './variant'

export const argTypes = {
  Radius: {
    options: RadiusKeys,
    control: { type: 'select' },
  },
  Shape: {
    options: ShapeKeys,
    control: { type: 'select' },
  },
  Size: {
    options: SizeKeys,
    control: { type: 'select' },
  },
  Theme: {
    options: ThemeKeys,
    control: { type: 'select' },
  },
  Variant: {
    options: VariantKeys,
    control: { type: 'select' },
  },
}
