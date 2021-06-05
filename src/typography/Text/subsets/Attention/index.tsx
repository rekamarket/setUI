import { FC } from 'react'
import Component, { Props } from '../../Component'

const Attention: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    weight: 'bold',

    // props passed
    ...props,

    // props override
    as: 'b',
  })

export default Attention
