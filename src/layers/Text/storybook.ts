import { ColorKeys } from './color'
import {
  FontFamilyKeys,
  FontSizeKeys,
  FontStyleKeys,
  FontWeightKeys,
} from './font'
import { OutlineKeys } from './outline'
import {
  TextAlignKeys,
  TextDecorationColorKeys,
  TextDecorationLineKeys,
  TextDecorationStyleKeys,
  TextDecorationThicknessKeys,
  TextTransformKeys,
} from './text'

export const colorArgTypes = {
  color: {
    options: ColorKeys,
    control: { type: 'select' },
  },
}

export const fontArgTypes = {
  fontFamily: {
    options: FontFamilyKeys,
    control: { type: 'select' },
  },
  fontSize: {
    options: FontSizeKeys,
    control: { type: 'select' },
  },
  fontStyle: {
    options: FontStyleKeys,
    control: { type: 'select' },
  },
  fontWeight: {
    options: FontWeightKeys,
    control: { type: 'select' },
  },
}

export const outlineArgTypes = {
  outline: {
    options: OutlineKeys,
    control: { type: 'select' },
  },
}

export const textArgTypes = {
  textAlign: {
    options: TextAlignKeys,
    control: { type: 'select' },
  },
  textDecorationColor: {
    options: TextDecorationColorKeys,
    control: { type: 'select' },
  },
  textDecorationLine: {
    options: TextDecorationLineKeys,
    control: { type: 'select' },
  },
  textDecorationStyle: {
    options: TextDecorationStyleKeys,
    control: { type: 'select' },
  },
  textDecorationThickness: {
    options: TextDecorationThicknessKeys,
    control: { type: 'select' },
  },
  textTransform: {
    options: TextTransformKeys,
    control: { type: 'select' },
  },
}

export const argTypes = {
  ...colorArgTypes,
  ...fontArgTypes,
  ...outlineArgTypes,
  ...textArgTypes,
}
