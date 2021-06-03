import { VFC } from 'react'
import { FlexDirectionMap } from 'CSS'
import Component, { Props } from '../../Component'

const Row: VFC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: FlexDirectionMap.row,
    ...props,
  })

export default Row
