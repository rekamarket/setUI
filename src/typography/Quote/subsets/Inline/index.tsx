import { FC } from 'react'
import cn from 'classnames'
import { ClassName } from './styles.css'
import Component, { Props } from '../../Component'

const QuoteInline: FC<Omit<Props, 'as' | 'display'>> = ({
  className,
  ...props
}) =>
  Component({
    // props default values
    style: 'italic',

    // props passed
    ...props,

    // props override
    as: 'q',
    className: cn(ClassName, className),
    display: 'inline',
  })

export default QuoteInline
