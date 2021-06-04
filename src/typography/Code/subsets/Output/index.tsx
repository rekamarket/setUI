import { FC } from 'react'
import Component, { Props } from '../../Component'

const SampleOutput: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    ...props,
    as: 'samp',
  })

export default SampleOutput
