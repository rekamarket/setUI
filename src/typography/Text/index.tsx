import { FC } from 'react'
import Set, { Props } from './Set'
import {
  Abbreviation,
  Attention,
  Citation,
  DefinedTerm,
  Disclaimer,
  Highlight,
  Idiomatic,
  Important,
  Normal,
  Outdated,
  StressEmphasis,
  Subscript,
  Superscript,
  UnarticulatedAnnotation,
} from './Subsets'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  Citation: typeof Citation
  DefinedTerm: typeof DefinedTerm
  Disclaimer: typeof Disclaimer
  Highlight: typeof Highlight
  Idiomatic: typeof Idiomatic
  Important: typeof Important
  Normal: typeof Normal
  Outdated: typeof Outdated
  Reference: typeof Citation
  StressEmphasis: typeof StressEmphasis
  Subscript: typeof Subscript
  Superscript: typeof Superscript
  UnarticulatedAnnotation: typeof UnarticulatedAnnotation

  // supersets
  // Placeholder: typeof Placeholder
}

const Text: I<Props> = (props) => Set(props)

// subsets
Text.Abbreviation = Abbreviation
Text.Attention = Attention
Text.Citation = Citation
Text.DefinedTerm = DefinedTerm
Text.Disclaimer = Disclaimer
Text.Highlight = Highlight
Text.Idiomatic = Idiomatic
Text.Important = Important
Text.Normal = Normal
Text.Outdated = Outdated
Text.Reference = Citation
Text.StressEmphasis = StressEmphasis
Text.Subscript = Subscript
Text.Superscript = Superscript
Text.UnarticulatedAnnotation = UnarticulatedAnnotation

// supersets
// Text.Placeholder = Placeholder

export type { Props } from './Set'
export default Text
