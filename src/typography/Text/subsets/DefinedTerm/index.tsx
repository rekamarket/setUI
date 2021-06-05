import { FC } from 'react'
import Component, { Props } from '../../Component'

const DefinedTerm: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    style: 'italic',

    // props passed
    ...props,

    // props override
    as: 'dfn',
  })

export default DefinedTerm
