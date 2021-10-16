import React from 'react'
import { Story, Meta } from '@storybook/react'
import { argTypes as textArgTypes } from 'layers/Text'
import { marginArgTypes, paddingArgTypes } from 'layers/Block'
import { defaultProps } from './defaultProps'
import Component, { Props, displayName } from './'
import { SymbolKeys, SymbolGapKeys, SymbolSizeKeys } from '../ProtoSet'

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
  // native
  symbol: {
    options: SymbolKeys,
    control: { type: 'select ' },
  },
  symbolGap: {
    options: SymbolGapKeys,
    control: { type: 'select ' },
  },
  symbolSize: {
    options: SymbolSizeKeys,
    control: { type: 'select ' },
  },

  ...textArgTypes,
  ...marginArgTypes,
  ...paddingArgTypes,
}
