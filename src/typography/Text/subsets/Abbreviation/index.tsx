import { FC } from 'react'
import Component, { Props } from '../../Component'

const Abbreviation: FC<
  Omit<Props, 'as' | 'title'> & Required<Pick<Props, 'title'>>
> = (props) =>
  Component({
    // props default values
    style: 'italic',

    decorationLine: 'underline',
    decorationStyle: 'dotted',
    decorationThickness: 2,
    weight: 'thin',

    // props passed
    ...props,

    // props override
    as: 'abbr',
  })

export default Abbreviation
