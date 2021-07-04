import React, { VFC } from 'react'
import { FlexDirectionMap } from 'layers/Flex'
import Component, { Props } from '../../Component'

const Column: VFC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: FlexDirectionMap.column,
    ...props,
  })

export default Column
