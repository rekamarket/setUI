import { FC } from 'react'
import Component, { Props } from '../../Component'

const Outdated: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    decorationLine: 'lineThrough',

    // props passed
    ...props,

    // props override
    as: 's',
  })

export default Outdated
