import React from 'react'
import { Story, Meta } from '@storybook/react'
import Component, { displayName } from './'

export default {
  component: Component,
  title: displayName,
} as Meta

const Template: Story = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.args = {
  children: `<${displayName}>`,
}
