import React, { VFC } from 'react'
import Component, { Props } from './Component'
import { Column, Row, Inline, Center } from './subsets'

interface I<T = unknown> extends VFC<T> {
  Column: typeof Column
  Row: typeof Row
  Inline: typeof Inline
  Center: typeof Center
}

const Flex: I<Props> = (props) => Component(props)

Flex.Column = Column
Flex.Row = Row
Flex.Inline = Inline
Flex.Center = Center

export type { Props } from './Component'

export default Flex
