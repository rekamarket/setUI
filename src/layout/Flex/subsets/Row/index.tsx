import { FC } from 'react'
import { FlexDirectionMap } from 'CSS'
import Component, { Props } from '../../Component'

const Row: FC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: FlexDirectionMap.row,
    ...props,
  })

export default Row
