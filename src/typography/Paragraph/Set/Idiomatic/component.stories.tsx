import { Story, Meta } from '@storybook/react'
import { argTypes as textArgTypes } from 'layers/Text'
import { marginArgTypes, paddingArgTypes } from 'layers/Block'
import { defaultProps } from '../defaultProps'
import Component, { displayName } from './'
import { Props } from './types'

export default {
  component: Component,
  title: displayName,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.args = {
  ...defaultProps,
  children: `<${displayName}>`,
}

Default.argTypes = {
  ...textArgTypes,
  ...marginArgTypes,
  ...paddingArgTypes,
}
