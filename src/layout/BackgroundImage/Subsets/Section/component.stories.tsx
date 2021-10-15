import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  PaddingKeys,
  MarginKeys,
  BackgroundAttachmentKeys,
  BackgroundClipKeys,
  BackgroundColorKeys,
  BackgroundOpacityKeys,
  BackgroundOriginKeys,
  BackgroundPositionKeys,
  BackgroundRepeatKeys,
  BackgroundSizeKeys,
  BorderColorKeys,
  BorderRadiusKeys,
  BorderStyleKeys,
  BorderThicknessKeys,
} from 'layers/Block'
import {
  AlignContentKeys,
  AlignItemsKeys,
  FlexDirectionKeys,
  FlexWrapKeys,
  GapKeys,
  JustifyContentKeys,
} from 'layers/Flex'
import { defaultProps } from './defaultProps'
import Component, { Props, displayName } from './'

export default {
  component: Component,
  title: `Typography/${displayName}`,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.args = {
  ...defaultProps,
  image:
    'https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg',
  children: `<${displayName}>`,
}

Default.argTypes = {
  // FlexLayer
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

  // Blocklayer
  // background
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

  // border
  borderColor: {
    options: BorderColorKeys,
    control: { type: 'select' },
  },
  borderRadius: {
    options: BorderRadiusKeys,
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

  // margin
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
  margin: {
    options: MarginKeys,
    control: { type: 'select' },
  },

  // padding
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
  padding: {
    options: PaddingKeys,
    control: { type: 'select' },
  },
}
