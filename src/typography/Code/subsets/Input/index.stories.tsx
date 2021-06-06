import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Paragraph } from 'typography'
import {
  ColorKeys,
  FontFamilyKeys,
  FontSizeKeys,
  FontStyleKeys,
  FontWeightKeys,
  BackgroundColorKeys,
  BorderColorKeys,
  BorderRadiusKeys,
  BorderWidthKeys,
  PaddingKeys,
} from 'CSS'
import { defaultProps } from './defaultProps'
import Component, { Props } from './'

export default {
  title: 'Typography/Code',
  component: Component,
  argTypes: {
    color: {
      options: ColorKeys,
      control: { type: 'select' },
    },
    type: {
      options: FontFamilyKeys,
      control: { type: 'inline-radio' },
    },
    size: {
      options: FontSizeKeys,
      control: { type: 'inline-radio' },
    },
    style: {
      options: FontStyleKeys,
      control: { type: 'inline-radio' },
    },
    weight: {
      options: FontWeightKeys,
      control: { type: 'inline-radio' },
    },
    background: {
      options: BackgroundColorKeys,
      control: { type: 'select' },
    },
    borderColor: {
      options: BorderColorKeys,
      control: { type: 'select' },
    },
    borderRadius: {
      options: BorderRadiusKeys,
      control: { type: 'inline-radio' },
    },
    borderWidth: {
      options: BorderWidthKeys,
      control: { type: 'inline-radio' },
    },
    padding: {
      options: PaddingKeys,
      control: { type: 'inline-radio' },
    },
    paddingX: {
      options: PaddingKeys,
      control: { type: 'inline-radio' },
    },
    paddingY: {
      options: PaddingKeys,
      control: { type: 'inline-radio' },
    },
    paddingTop: {
      options: PaddingKeys,
      control: { type: 'inline-radio' },
    },
    paddingRight: {
      options: PaddingKeys,
      control: { type: 'inline-radio' },
    },
    paddingBottom: {
      options: PaddingKeys,
      control: { type: 'inline-radio' },
    },
    paddingLeft: {
      options: PaddingKeys,
      control: { type: 'inline-radio' },
    },
  },
} as Meta

const Template: Story<Props> = (args) => (
  <Paragraph borderColor="black" borderWidth="thin" padding="large">
    Please press <Component {...args}>Ctrl</Component> +{' '}
    <Component {...args}>Shift</Component> + <Component {...args}>R</Component>{' '}
    to re-render an MDN page.
  </Paragraph>
)

export const Input = Template.bind({})
Input.args = defaultProps
