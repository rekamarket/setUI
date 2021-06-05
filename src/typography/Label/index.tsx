import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Legend } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Legend: typeof Legend

  // supersets
  Placeholder: typeof Placeholder
}

const Label: I<ComponentProps> = (props) => Component(props)

// subsets
Label.Legend = Legend

// supersets
Label.Placeholder = Placeholder

export default Label
