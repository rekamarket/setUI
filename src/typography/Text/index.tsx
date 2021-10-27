import { FC } from 'react'
import Set, { Props } from './Set'
import {
  AbbreviationConfigurable as Abbreviation,
  AttentionConfigurable as Attention,
  CitationConfigurable as Citation,
  DefinedTermConfigurable as DefinedTerm,
  DisclaimerConfigurable as Disclaimer,
  HighlightConfigurable as Highlight,
  IdiomaticConfigurable as Idiomatic,
  ImportantConfigurable as Important,
  OutdatedConfigurable as Outdated,
  StressEmphasisConfigurable as StressEmphasis,
  SubscriptConfigurable as Subscript,
  SuperscriptConfigurable as Superscript,
  TextInlineConfigurable as TextInline,
  UnarticulatedAnnotationConfigurable as UnarticulatedAnnotation,
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
  Outdated: typeof Outdated
  Reference: typeof Citation
  StressEmphasis: typeof StressEmphasis
  Subscript: typeof Subscript
  Superscript: typeof Superscript
  TextInline: typeof TextInline
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
Text.Outdated = Outdated
Text.Reference = Citation
Text.StressEmphasis = StressEmphasis
Text.Subscript = Subscript
Text.Superscript = Superscript
Text.TextInline = TextInline
Text.UnarticulatedAnnotation = UnarticulatedAnnotation

// supersets
// Text.Placeholder = Placeholder

export type { Props } from './Set'
export {
  AbbreviationIdiomatic as Abbreviation,
  AbbreviationSnippets,
  AttentionIdiomatic as Attention,
  AttentionSnippets,
  CitationIdiomatic as Citation,
  CitationSnippets,
  DefinedTermIdiomatic as DefinedTerm,
  DefinedTermSnippets,
  DisclaimerIdiomatic as Disclaimer,
  DisclaimerSnippets,
  HighlightIdiomatic as Highlight,
  HighlightSnippets,
  IdiomaticIdiomatic as Idiomatic,
  IdiomaticSnippets,
  ImportantIdiomatic as Important,
  ImportantSnippets,
  OutdatedIdiomatic as Outdated,
  OutdatedSnippets,
  CitationIdiomatic as Reference,
  CitationSnippets as ReferenceSnippets,
  StressEmphasisIdiomatic as StressEmphasis,
  StressEmphasisSnippets,
  SubscriptIdiomatic as Subscript,
  SubscriptSnippets,
  SuperscriptIdiomatic as Superscript,
  SuperscriptSnippets,
  TextInlineIdiomatic as TextInline,
  TextInlineSnippets,
  UnarticulatedAnnotationIdiomatic as UnarticulatedAnnotation,
  UnarticulatedAnnotationSnippets,
} from './Subsets'
export default Text
