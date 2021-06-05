import { FC } from 'react'
import cn from 'classnames'
import { ClassName } from './styles.css'
import Component, { Props } from '../../Component'

const Insertion: FC<Omit<Props, 'as'>> = ({ className, ...props }) =>
  Component({
    // props default values
    background: 'successPale',

    // props passed
    ...props,

    // props override
    as: 'ins',
    className: cn(ClassName, className),
  })

export default Insertion
