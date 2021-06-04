import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Deletion, Insertion } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Deletion: typeof Deletion
  Insertion: typeof Insertion

  // supersets
  Placeholder: typeof Placeholder
}

const Edit: I<ComponentProps> = (props) => Component(props)

// subsets
Edit.Deletion = Deletion
Edit.Insertion = Insertion

// supersets
Edit.Placeholder = Placeholder

export default Edit
