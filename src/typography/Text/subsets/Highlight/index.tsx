import { FC } from 'react'
import Component, { Props } from '../../Component'

const Highlight: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    background: 'success',
    color: 'white',

    // props passed
    ...props,

    // props override
    as: 'mark',
  })

export default Highlight
