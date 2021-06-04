import { FC } from 'react'
import Component, { Props } from '../../Component'

const KeyboardInput: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'kbd',
  })

export default KeyboardInput
