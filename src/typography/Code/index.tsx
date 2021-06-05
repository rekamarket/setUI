import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Input, Output, Variable } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Input: typeof Input
  Output: typeof Output
  Variable: typeof Variable

  // supersets
  Placeholder: typeof Placeholder
}

const Code: I<ComponentProps> = (props) => Component(props)

// subsets
Code.Input = Input
Code.Output = Output
Code.Variable = Variable

// supersets
Code.Placeholder = Placeholder

export default Code
