import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  ColorKeys,
  FontFamilyKeys,
  FontSizeKeys,
  FontStyleKeys,
  FontWeightKeys,
  OutlineKeys,
  TextAlignKeys,
  TextDecorationColorKeys,
  TextDecorationLineKeys,
  TextDecorationStyleKeys,
  TextDecorationThicknessKeys,
  TextTransformKeys,
} from 'layers/Text'
import { MarginKeys, PaddingKeys } from 'layers/Block'
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
  children: `<${displayName}>`,
}

Default.argTypes = {
  // Textlayer
  color: {
    options: ColorKeys,
    control: { type: 'select' },
  },
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
  outline: {
    options: OutlineKeys,
    control: { type: 'select' },
  },
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

  // BlockLayer
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
