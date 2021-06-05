import { FC } from 'react'
import Component, { Props } from '../../Component'

const Variable: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    weight: 'bold',
    style: 'italic',

    // props passed
    ...props,

    // props override
    as: 'var',
  })

export default Variable
