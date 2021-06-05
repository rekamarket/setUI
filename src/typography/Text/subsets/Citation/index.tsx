import { FC } from 'react'
import Component, { Props } from '../../Component'

const Citation: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    style: 'italic',

    // props passed
    ...props,

    // props override
    as: 'cite',
  })

export default Citation
