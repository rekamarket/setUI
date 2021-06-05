import { FC } from 'react'
import cn from 'classnames'
import { ClassName } from './styles.css'
import Component, { Props } from '../../Component'

const Deletion: FC<Omit<Props, 'as'>> = ({ className, ...props }) =>
  Component({
    // props default values
    background: 'errorPale',

    // props passed
    ...props,

    // props override
    as: 'del',
    className: cn(ClassName, className),
  })

export default Deletion
