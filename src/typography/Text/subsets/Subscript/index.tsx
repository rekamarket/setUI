import { FC } from 'react'
import cn from 'classnames'
import { ClassName } from './styles.css'
import Component, { Props } from '../../Component'

const Subscript: FC<Omit<Props, 'as'>> = ({ className, ...props }) =>
  Component({
    // props default values
    size: 'smaller',

    // props passed
    ...props,

    // props override
    as: 'sub',
    className: cn(ClassName, className),
  })

export default Subscript
