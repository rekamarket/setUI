import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Paragraph, LineBreak } from 'typography'
import Component from './'
import { Props } from '../../Component'

export default {
  title: 'Typography/Code',
  component: Component,
} as Meta

const Template: Story<Props> = (args) => (
  <Paragraph borderColor="black" borderWidth="thin" padding="large">
    The volume of a box is <Component {...args}>l</Component> ×{' '}
    <Component {...args}>w</Component> × <Component {...args}>h</Component>,
    where <Component {...args}>l</Component> represents the length,{' '}
    <Component {...args}>w</Component> the width and{' '}
    <Component {...args}>h</Component> the height of the box.
  </Paragraph>
)

export const Variable = Template.bind({})
Variable.args = {}
