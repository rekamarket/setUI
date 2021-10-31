import { Story, Meta } from '@storybook/react'
import { argTypes as textArgTypes } from 'layers/Text'
import { defaultProps } from '../defaultProps'
import Component, { displayName } from './'
import { Props } from './types'

export default {
  component: Component,
  title: `${displayName} | Устаревшее`,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.parameters = {
  controls: {
    sort: 'requiredFirst',
    include: ['children', 'color', 'fontFamily', 'fontSize', 'fontWeight'],
  },
}

Default.args = {
  ...defaultProps,
  children: `<${displayName}>`,
}

Default.argTypes = {
  color: textArgTypes.color,
  fontFamily: textArgTypes.fontFamily,
  fontSize: textArgTypes.fontSize,
  fontWeight: textArgTypes.fontWeight,
}
