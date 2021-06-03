import { FC } from 'react'
import Component, { Props } from '../../Component'

const StressEmphasis: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'em',
  })

export default StressEmphasis
