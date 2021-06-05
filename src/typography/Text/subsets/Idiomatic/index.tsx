import { FC } from 'react'
import Component, { Props } from '../../Component'

const Idiomatic: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    style: 'italic',

    // props passed
    ...props,

    // props override
    as: 'i',
  })

export default Idiomatic
