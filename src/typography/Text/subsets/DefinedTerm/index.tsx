import { FC } from 'react'
import Component, { Props } from '../../Component'

const DefinedTerm: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'dfn',
  })

export default DefinedTerm
