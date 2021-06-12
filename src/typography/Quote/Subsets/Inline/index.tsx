import { FC } from 'react'
import cn from 'classnames'
import { ClassName } from './styles.css'
import Set, { Props } from '../../Set'

const QuoteInline: FC<Omit<Props, 'as' | 'display'>> = ({
  className,
  ...props
}) =>
  Set({
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
