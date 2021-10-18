import {
  BackgroundAttachmentKeys,
  BackgroundClipKeys,
  BackgroundColorKeys,
  BackgroundOpacityKeys,
  BackgroundOriginKeys,
  BackgroundPositionKeys,
  BackgroundRepeatKeys,
  BackgroundSizeKeys,
} from './background'
import { BorderColorKeys, BorderStyleKeys, BorderThicknessKeys } from './border'
import { CornerRadiusKeys } from './corner'
import { PaddingKeys } from './padding'
import { MarginKeys } from './margin'
import { TextAlignKeys } from './text'

export const backgroundArgTypes = {
  backgroundAttachment: {
    options: BackgroundAttachmentKeys,
    control: { type: 'select' },
  },
  backgroundClip: {
    options: BackgroundClipKeys,
    control: { type: 'select' },
  },
  backgroundColor: {
    options: BackgroundColorKeys,
    control: { type: 'select' },
  },
  backgroundOpacity: {
    options: BackgroundOpacityKeys,
    control: { type: 'select' },
  },
  backgroundOrigin: {
    options: BackgroundOriginKeys,
    control: { type: 'select' },
  },
  backgroundPosition: {
    options: BackgroundPositionKeys,
    control: { type: 'select' },
  },
  backgroundRepeat: {
    options: BackgroundRepeatKeys,
    control: { type: 'select' },
  },
  backgroundSize: {
    options: BackgroundSizeKeys,
    control: { type: 'select' },
  },
}

export const borderArgTypes = {
  borderColor: {
    options: BorderColorKeys,
    control: { type: 'select' },
  },
  borderStyle: {
    options: BorderStyleKeys,
    control: { type: 'select' },
  },
  borderThickness: {
    options: BorderThicknessKeys,
    control: { type: 'select' },
  },
}

export const cornerArgTypes = {
  cornerRadius: {
    options: CornerRadiusKeys,
    control: { type: 'select' },
  },
}

export const marginShorthandnArgTypes = {
  margin: {
    options: MarginKeys,
    control: { type: 'select' },
  },
}

export const marginArgTypes = {
  marginTop: {
    options: MarginKeys,
    control: { type: 'select' },
  },
  marginRight: {
    options: MarginKeys,
    control: { type: 'select' },
  },
  marginBottom: {
    options: MarginKeys,
    control: { type: 'select' },
  },
  marginLeft: {
    options: MarginKeys,
    control: { type: 'select' },
  },
  marginX: {
    options: MarginKeys,
    control: { type: 'select' },
  },
  marginY: {
    options: MarginKeys,
    control: { type: 'select' },
  },
  ...marginShorthandnArgTypes,
}

export const paddingShorthandArgTypes = {
  padding: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
}

export const paddingArgTypes = {
  paddingTop: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
  paddingRight: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
  paddingBottom: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
  paddingLeft: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
  paddingX: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
  paddingY: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
  ...paddingShorthandArgTypes,
}

export const textArgTypes = {
  textAlign: {
    options: TextAlignKeys,
    control: { type: 'select' },
  },
}

export const argTypes = {
  ...backgroundArgTypes,
  ...borderArgTypes,
  ...cornerArgTypes,
  ...marginArgTypes,
  ...paddingArgTypes,
  ...textArgTypes,
}
