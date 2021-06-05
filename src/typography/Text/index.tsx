import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Abbreviation,
  Attention,
  Citation,
  DefinedTerm,
  Disclaimer,
  Emphasis,
  Highlight,
  Idiomatic,
  Outdated,
  StressEmphasis,
  Strong,
  Subscript,
  Superscript,
  UnarticulatedAnnotation,
} from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  Citation: typeof Citation
  DefinedTerm: typeof DefinedTerm
  Disclaimer: typeof Disclaimer
  Emphasis: typeof Emphasis
  Highlight: typeof Highlight
  Idiomatic: typeof Idiomatic
  Outdated: typeof Outdated
  Reference: typeof Citation
  StressEmphasis: typeof StressEmphasis
  Strong: typeof Strong
  Subscript: typeof Subscript
  Superscript: typeof Superscript
  UnarticulatedAnnotation: typeof UnarticulatedAnnotation

  // supersets
  Placeholder: typeof Placeholder
}

const Text: I<ComponentProps> = (props) => Component(props)

// subsets
Text.Abbreviation = Abbreviation
Text.Attention = Attention
Text.Citation = Citation
Text.DefinedTerm = DefinedTerm
Text.Disclaimer = Disclaimer
Text.Emphasis = Emphasis
Text.Highlight = Highlight
Text.Idiomatic = Idiomatic
Text.Outdated = Outdated
Text.Reference = Citation
Text.StressEmphasis = StressEmphasis
Text.Strong = Strong
Text.Subscript = Subscript
Text.Superscript = Superscript
Text.UnarticulatedAnnotation = UnarticulatedAnnotation

// supersets
Text.Placeholder = Placeholder

export default Text
