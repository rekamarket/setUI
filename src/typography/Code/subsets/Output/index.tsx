import { FC } from 'react'
import Component, { Props } from '../../Component'

const Output: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props passed
    ...props,

    // props override
    as: 'samp',
  })

export default Output
