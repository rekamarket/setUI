import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Paragraph } from 'typography'
import Component, { Props } from './'

export default {
  title: 'Typography/Code',
  component: Component,
} as Meta

const Template: Story<Props> = (args) => (
  <Paragraph borderColor="black" borderWidth="thin" padding="large">
    The <Component {...args}>push()</Component> method adds one or more elements
    to the end of an array and returns the new length of the array.
  </Paragraph>
)

export const Root = Template.bind({})
Root.args = {}
