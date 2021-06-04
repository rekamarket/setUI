import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Abbreviation,
  Attention,
  Citation,
  DeletedText,
  DefinedTerm,
  Disclaimer,
  Emphasis,
  Highlight,
  Idiomatic,
  InsertedText,
  Label,
  Legend,
  Outdated,
  StressEmphasis,
  Strong,
  Subscript,
  Superscript,
  Time,
  UnarticulatedAnnotation,
} from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  Citation: typeof Citation
  DeletedText: typeof DeletedText
  DefinedTerm: typeof DefinedTerm
  Disclaimer: typeof Disclaimer
  Emphasis: typeof Emphasis
  Highlight: typeof Highlight
  Idiomatic: typeof Idiomatic
  InsertedText: typeof InsertedText
  Label: typeof Label
  Legend: typeof Legend
  Outdated: typeof Outdated
  Reference: typeof Citation
  StressEmphasis: typeof StressEmphasis
  Strong: typeof Strong
  Subscript: typeof Subscript
  Superscript: typeof Superscript
  Time: typeof Time
  UnarticulatedAnnotation: typeof UnarticulatedAnnotation

  // supersets
  Placeholder: typeof Placeholder
}

const Text: I<ComponentProps> = (props) => Component(props)

// subsets
Text.Abbreviation = Abbreviation
Text.Attention = Attention
Text.Citation = Citation
Text.DeletedText = DeletedText
Text.DefinedTerm = DefinedTerm
Text.Disclaimer = Disclaimer
Text.Emphasis = Emphasis
Text.Highlight = Highlight
Text.Idiomatic = Idiomatic
Text.InsertedText = InsertedText
Text.Label = Label
Text.Legend = Legend
Text.Outdated = Outdated
Text.Reference = Citation
Text.StressEmphasis = StressEmphasis
Text.Strong = Strong
Text.Subscript = Subscript
Text.Superscript = Superscript
Text.Time = Time
Text.UnarticulatedAnnotation = UnarticulatedAnnotation

// supersets
Text.Placeholder = Placeholder

export default Text
