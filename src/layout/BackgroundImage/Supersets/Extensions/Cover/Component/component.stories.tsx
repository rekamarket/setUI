import { Story, Meta } from '@storybook/react'
import { argTypes as blockArgTypes } from 'layers/Block'
import { argTypes as flexArgTypes } from 'layers/Flex'
import { defaultProps } from './defaultProps'
import Component, { Props, displayName } from './'

export default {
  component: Component,
  title: `${displayName} | Обложка`,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.parameters = {
  controls: {
    sort: 'requiredFirst',
    include: ['image'],
  },
}

Default.args = {
  ...defaultProps,
  image:
    'https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg',
}

Default.argTypes = {
  ...blockArgTypes,
  ...flexArgTypes,
}
