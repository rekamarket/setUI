import { FC } from 'react'
import cn from 'classnames'
import { P } from './styles.css'
import Set, { Props } from '../../Set'

const QuoteBlock: FC<Omit<Props, 'as' | 'display'>> = ({
  children,
  ...props
}) =>
  Set({
    // props default values
    style: 'italic',
    background: 'grey40',
    paddingX: 'xlarge',
    paddingY: 'xxlarge',
    borderRadius: 'small',

    // props passed
    ...props,

    // props override
    as: 'blockquote',
    display: 'flex',
    children: <p className={P}>{children}</p>,
  })

export default QuoteBlock
