import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Abbreviation,
  Attention,
  Citation,
  Code,
  DeletedText,
  DefinedTerm,
  Emphasis,
  Highlight,
  Idiomatic,
  InsertedText,
  KeyboardInput,
  QuoteBlock,
  QuoteInline,
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
  Citation: typeof Citation
  Code: typeof Code
  DeletedText: typeof DeletedText
  DefinedTerm: typeof DefinedTerm
  Emphasis: typeof Emphasis
  Highlight: typeof Highlight
  Idiomatic: typeof Idiomatic
  InsertedText: typeof InsertedText
  KeyboardInput: typeof KeyboardInput
  QuoteBlock: typeof QuoteBlock
  QuoteInline: typeof QuoteInline
  Reference: typeof Citation
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
Text.Citation = Citation
Text.Code = Code
Text.DeletedText = DeletedText
Text.DefinedTerm = DefinedTerm
Text.Emphasis = Emphasis
Text.Highlight = Highlight
Text.Idiomatic = Idiomatic
Text.InsertedText = InsertedText
Text.KeyboardInput = KeyboardInput
Text.QuoteBlock = QuoteBlock
Text.QuoteInline = QuoteInline
Text.Reference = Citation
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
