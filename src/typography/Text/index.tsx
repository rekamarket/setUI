import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Abbreviation,
  Attention,
  Code,
  DefinedTerm,
  Emphasis,
  Idiomatic,
  SampleOutput,
  StressEmphasis,
  Strong,
  Subscript,
  Superscript,
  Time,
} from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  Code: typeof Code
  DefinedTerm: typeof DefinedTerm
  Emphasis: typeof Emphasis
  Idiomatic: typeof Idiomatic
  SampleOutput: typeof SampleOutput
  StressEmphasis: typeof StressEmphasis
  Strong: typeof Strong
  Subscript: typeof Subscript
  Superscript: typeof Superscript
  Time: typeof Time

  // supersets
  Placeholder: typeof Placeholder
}

const Text: I<ComponentProps> = (props) => Component(props)

// subsets
Text.Abbreviation = Abbreviation
Text.Attention = Attention
Text.Code = Code
Text.DefinedTerm = DefinedTerm
Text.Emphasis = Emphasis
Text.Idiomatic = Idiomatic
Text.SampleOutput = SampleOutput
Text.StressEmphasis = StressEmphasis
Text.Strong = Strong
Text.Subscript = Subscript
Text.Superscript = Superscript
Text.Time = Time

// supersets
Text.Placeholder = Placeholder

export default Text
