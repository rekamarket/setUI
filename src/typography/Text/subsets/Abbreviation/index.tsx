import { FC } from 'react'
import Component, { Props } from '../../Component'

const Abbreviation: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'abbr',
  })

export default Abbreviation
