import { FC } from 'react'
import { FlexDirectionMap } from 'CSS'
import Component, { Props } from '../../Component'

const Column: FC<Omit<Props, 'direction'>> = (props) =>
  Component({
    direction: FlexDirectionMap.column,
    ...props,
  })

export default Column
