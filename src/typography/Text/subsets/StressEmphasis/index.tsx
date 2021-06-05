import { FC } from 'react'
import Component, { Props } from '../../Component'

const StressEmphasis: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    style: 'italic',

    // props passed
    ...props,

    // props override
    as: 'em',
  })

export default StressEmphasis
