import { FC } from 'react'
import Component, { Props } from '../../Component'

const Abbreviation: FC<
  Omit<Props, 'as' | 'title'> & Required<Pick<Props, 'title'>>
> = (props) =>
  Component({
    ...props,
    as: 'abbr',
  })

export default Abbreviation
