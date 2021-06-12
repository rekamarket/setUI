import { FC } from 'react'
import type { Props } from './Set'
import { Source, Deletion, Insertion } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Deletion: typeof Deletion
  Insertion: typeof Insertion

  // supersets
  Placeholder: typeof Placeholder
}

const Edit: I<Props> = (props) => Source(props)

// subsets
Edit.Deletion = Deletion
Edit.Insertion = Insertion

// supersets
Edit.Placeholder = Placeholder

export type { Props } from './Set'

export default Edit
