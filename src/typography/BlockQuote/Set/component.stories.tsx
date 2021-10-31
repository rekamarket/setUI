import { Story, Meta } from '@storybook/react'
import { argTypes as textArgTypes } from 'layers/Text'
import { marginArgTypes, paddingArgTypes } from 'layers/Block'
import { defaultProps } from './defaultProps'
import Component, { Props, displayName } from './'
import { symbolArgTypes } from '../ProtoSet'

export default {
  component: Component,
  title: `${displayName} | Цитата`,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.args = {
  ...defaultProps,
  children: `<${displayName}>`,
}

Default.argTypes = {
  ...symbolArgTypes,
  ...textArgTypes,
  ...marginArgTypes,
  ...paddingArgTypes,
}
