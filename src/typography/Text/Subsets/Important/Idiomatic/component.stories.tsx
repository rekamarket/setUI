import { Story, Meta } from '@storybook/react'
import { argTypes as textArgTypes } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import Component, { displayName } from './'
import { Props } from './types'

export default {
  component: Component,
  title: `${displayName} | Важно`,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.parameters = {
  controls: {
    sort: 'requiredFirst',
    include: ['children', 'color', 'fontSize', 'fontWeight'],
  },
}

Default.args = {
  ...defaultProps,
  children: `<${displayName}>`,
}

Default.argTypes = {
  color: textArgTypes.color,
  fontSize: textArgTypes.fontSize,
  fontWeight: textArgTypes.fontWeight,
}
