import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Abbreviation,
  Attention,
  Code,
  DefinedTerm,
  Emphasis,
  Highlight,
  Idiomatic,
  KeyboardInput,
  SampleOutput,
  StressEmphasis,
  Strong,
  Subscript,
  Superscript,
  Time,
  Variable,
} from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  Code: typeof Code
  DefinedTerm: typeof DefinedTerm
  Emphasis: typeof Emphasis
  Highlight: typeof Highlight
  Idiomatic: typeof Idiomatic
  KeyboardInput: typeof KeyboardInput
  SampleOutput: typeof SampleOutput
  StressEmphasis: typeof StressEmphasis
  Strong: typeof Strong
  Subscript: typeof Subscript
  Superscript: typeof Superscript
  Time: typeof Time
  Variable: typeof Variable

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
Text.KeyboardInput = KeyboardInput
Text.Highlight = Highlight
Text.SampleOutput = SampleOutput
Text.StressEmphasis = StressEmphasis
Text.Strong = Strong
Text.Subscript = Subscript
Text.Superscript = Superscript
Text.Time = Time
Text.Variable = Variable

// supersets
Text.Placeholder = Placeholder

export default Text
