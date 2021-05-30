import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Column, Row, Inline, Center } from './subsets'

interface I<T = unknown> extends FC<T> {
  Column: typeof Column
  Row: typeof Row
  Inline: typeof Inline
  Center: typeof Center
}

const Flex: I<ComponentProps> = (props) => Component(props)

Flex.Column = Column
Flex.Row = Row
Flex.Inline = Inline
Flex.Center = Center

export default Flex
