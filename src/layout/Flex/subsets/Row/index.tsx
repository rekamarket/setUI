import React, { VFC } from 'react'
import { FlexDirectionMap } from 'layers/Flex'
import Component, { Props } from '../../Component'

const Row: VFC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: FlexDirectionMap.row,
    ...props,
  })

export default Row
