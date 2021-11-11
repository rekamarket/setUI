import {
  argTypes as argTypesLink,
  ShapeKeys,
  SizeKeys,
  VariantKeys,
} from '../css'

export const argTypes = {
  ...argTypesLink,

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
