import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Code, Input, Output, Variable } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Code: typeof Code
  Input: typeof Input
  Output: typeof Output
  Variable: typeof Variable

  // supersets
  Placeholder: typeof Placeholder
}

const C: I<ComponentProps> = (props) => Component(props)

// subsets
C.Code = Code
C.Input = Input
C.Output = Output
C.Variable = Variable

// supersets
C.Placeholder = Placeholder

export default C
