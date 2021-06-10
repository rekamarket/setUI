import { FC } from 'react'
import type { Props } from './Set'
import { Source, Inline, Input, Output, Variable } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Inline: typeof Inline
  Input: typeof Input
  Output: typeof Output
  Variable: typeof Variable

  // supersets
  Placeholder: typeof Placeholder
}

const Code: I<Props> = (props) => Source(props)

// subsets
Code.Inline = Inline
Code.Input = Input
Code.Output = Output
Code.Variable = Variable

// supersets
Code.Placeholder = Placeholder

export type { Props } from './Set'
export default Code
