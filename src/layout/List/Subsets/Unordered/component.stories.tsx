import { Story, Meta } from '@storybook/react'
import { TextInline } from 'typography'
import { argTypes as textArgTypes } from 'layers/Text'
import { marginArgTypes, paddingArgTypes } from 'layers/Block'
import { defaultProps } from './defaultProps'
import Component, { Props, displayName } from './'
import { listArgTypes } from '../../ProtoSet'

export default {
  component: Component,
  title: `${displayName} | Ненумерованный список`,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.args = {
  ...defaultProps,
  children: [
    <TextInline>Пункт 1</TextInline>,
    <TextInline>Пункт 2</TextInline>,
  ],
}

Default.argTypes = {
  ...listArgTypes,
  ...textArgTypes,
  ...marginArgTypes,
  ...paddingArgTypes,
}
