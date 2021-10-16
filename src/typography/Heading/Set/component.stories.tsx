import React from 'react'
import { Story, Meta } from '@storybook/react'
import { argTypes as textArgTypes } from 'layers/Text'
import { marginArgTypes, paddingArgTypes } from 'layers/Block'
import { defaultProps } from './defaultProps'
import Component, { Props, displayName } from './'
import { LevelKeys } from '../ProtoSet'

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
  level: {
    options: LevelKeys,
    control: { type: 'select' },
  },

  ...textArgTypes,
  ...marginArgTypes,
  ...paddingArgTypes,
}
