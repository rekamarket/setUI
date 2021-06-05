import { FC } from 'react'
import Component, { Props } from '../../Component'

const Disclaimer: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    size: 'smaller',

    // props passed
    ...props,

    // props override
    as: 'small',
  })

export default Disclaimer
