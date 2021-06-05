import { FC } from 'react'
import Component, { Props } from '../../Component'

const Important: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    weight: 'bold',

    // props passed
    ...props,

    // props override
    as: 'strong',
  })

export default Important
