import Set from './Set'
import type { Props } from './Set'

import {
  AbbreviationGeneric as Abbreviation,
  AttentionGeneric as Attention,
  CitationGeneric as Citation,
  DefinedTermGeneric as DefinedTerm,
  DisclaimerGeneric as Disclaimer,
  HighlightGeneric as Highlight,
  IdiomaticGeneric as Idiomatic,
  ImportantGeneric as Important,
  OutdatedGeneric as Outdated,
  StressEmphasisGeneric as StressEmphasis,
  SubscriptGeneric as Subscript,
  SuperscriptGeneric as Superscript,
  TextInlineGeneric as TextInline,
  UnarticulatedAnnotationGeneric as UnarticulatedAnnotation,
} from './Subsets'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  Abbreviation: typeof Abbreviation
  Attention: typeof Attention
  Citation: typeof Citation
  DefinedTerm: typeof DefinedTerm
  Disclaimer: typeof Disclaimer
  Highlight: typeof Highlight
  Idiomatic: typeof Idiomatic
  Important: typeof Important
  Outdated: typeof Outdated
  StressEmphasis: typeof StressEmphasis
  Subscript: typeof Subscript
  Superscript: typeof Superscript
  TextInline: typeof TextInline
  UnarticulatedAnnotation: typeof UnarticulatedAnnotation
}

const Text = Set as CompoundedComponent

// subsets
Text.Abbreviation = Abbreviation
Text.Attention = Attention
Text.Citation = Citation
Text.DefinedTerm = DefinedTerm
Text.Disclaimer = Disclaimer
Text.Highlight = Highlight
Text.Idiomatic = Idiomatic
Text.Important = Important
Text.Outdated = Outdated
Text.StressEmphasis = StressEmphasis
Text.Subscript = Subscript
Text.Superscript = Superscript
Text.TextInline = TextInline
Text.UnarticulatedAnnotation = UnarticulatedAnnotation

export type { Props } from './types'
export { text } from './Set'

export {
  Abbreviation,
  abbreviation,
  Attention,
  attention,
  Citation,
  citation,
  DefinedTerm,
  definedTerm,
  Disclaimer,
  disclaimer,
  Highlight,
  highlight,
  Idiomatic,
  idiomatic,
  Important,
  important,
  Outdated,
  outdated,
  StressEmphasis,
  stressEmphasis,
  Subscript,
  subscript,
  Superscript,
  superscript,
  TextInline,
  textInline,
  UnarticulatedAnnotation,
  unarticulatedAnnotation,
} from './Subsets'

export default Text
