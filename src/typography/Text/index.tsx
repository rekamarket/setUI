import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Abbreviation,
  Attention,
  DefinedTerm,
  Emphasis,
  Idiomatic,
  SampleOutput,
  StressEmphasis,
  Strong,
  Subscript,
  Superscript,
} from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  DefinedTerm: typeof DefinedTerm
  Emphasis: typeof Emphasis
  Idiomatic: typeof Idiomatic
  SampleOutput: typeof SampleOutput
  StressEmphasis: typeof StressEmphasis
  Strong: typeof Strong
  Subscript: typeof Subscript
  Superscript: typeof Superscript

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
Text.SampleOutput = SampleOutput
Text.StressEmphasis = StressEmphasis
Text.Strong = Strong
Text.Subscript = Subscript
Text.Superscript = Superscript

// supersets
Text.Placeholder = Placeholder

export default Text
