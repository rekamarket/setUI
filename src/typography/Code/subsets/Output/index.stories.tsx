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
    <Component {...args}>
      Keyboard not found <LineBreak />
      Press F1 to continue
    </Component>
  </Paragraph>
)

export const Output = Template.bind({})
Output.args = {}
