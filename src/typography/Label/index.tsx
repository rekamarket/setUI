import { FC } from 'react'
import Set, { Props } from './Set'
import { Legend } from './Subsets'
import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Legend: typeof Legend

  // supersets
  Placeholder: typeof Placeholder
}

const Label: I<Props> = (props) => Set(props)

// subsets
Label.Legend = Legend

// supersets
Label.Placeholder = Placeholder

export default Label
