import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Abbreviation,
  Attention,
  DefinedTerm,
  Emphasis,
  Idiomatic,
  StressEmphasis,
  Strong,
} from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  DefinedTerm: typeof DefinedTerm
  Emphasis: typeof Emphasis
  Idiomatic: typeof Idiomatic
  StressEmphasis: typeof StressEmphasis
  Strong: typeof Strong

  // supersets
  Placeholder: typeof Placeholder
}

const Text: I<ComponentProps> = (props) => Component(props)

// subsets
Text.Abbreviation = Abbreviation
Text.Attention = Attention
Text.DefinedTerm = DefinedTerm
Text.Emphasis = Emphasis
Text.Idiomatic = Idiomatic
Text.StressEmphasis = StressEmphasis
Text.Strong = Strong

// supersets
Text.Placeholder = Placeholder

export default Text
