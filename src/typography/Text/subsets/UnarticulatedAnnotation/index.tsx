import { FC } from 'react'
import Component, { Props } from '../../Component'

const UnarticulatedAnnotation: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    decorationColor: 'error',
    decorationLine: 'underline',
    decorationStyle: 'wavy',
    decorationThickness: 'light',

    // props passed
    ...props,

    // props override
    as: 'u',
  })

export default UnarticulatedAnnotation
