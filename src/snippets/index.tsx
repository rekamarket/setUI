import {
  BackgroundImageSnippets as BackgroundImage,
  CoverSnippets as Cover,
  FrameSnippets as Frame,
  FullBleedSnippets as FullBleed,
  UnorderedSnippets as Unordered,
} from 'layout'

import {
  LinkSnippets as Link,
  BlockQuoteSnippets as BlockQuote,
  HeadingSnippets as Heading,
  H1Snippets as H1,
  H2Snippets as H2,
  H3Snippets as H3,
  H4Snippets as H4,
  H5Snippets as H5,
  H6Snippets as H6,
  AbbreviationSnippets as Abbreviation,
  AttentionSnippets as Attention,
  // CitationSnippets as Citation,
  // DefinedTermSnippets as DefinedTerm,
  // DisclaimerSnippets as Disclaimer,
  // HighlightSnippets as Highlight,
  // IdiomaticSnippets as Idiomatic,
  ImportantSnippets as Important,
  TextInlineSnippets as TextInline,
  //OutdatedSnippets as Outdated,
  //ReferenceSnippets as Reference,
  //StressEmphasisSnippets as StressEmphasis,
  //SubscriptSnippets as Subscript,
  //SuperscriptSnippets as Superscript,
  //UnarticulatedAnnotationSnippets as UnarticulatedAnnotation,
  ParagraphSnippets as Paragraph,
  TextBlockSnippets as TextBlock,
  TimeSnippets as Time,
  SymbolsSnippets as Symbols,
} from 'typography'

export default [
  ...Symbols,
  ...Link,
  ...Heading,
  ...H1,
  ...H2,
  ...H3,
  ...H4,
  ...H5,
  ...H6,
  ...Abbreviation,
  ...Attention,
  // ...Citation,
  // ...DefinedTerm,
  // ...Disclaimer,
  // ...Highlight,
  // ...Idiomatic,
  ...TextInline,
  ...Important,
  // ...Outdated,
  // ...Reference,
  // ...StressEmphasis,
  // ...Subscript,
  // ...Superscript,
  // ...UnarticulatedAnnotation,
  ...Paragraph,
  ...TextBlock,
  ...BlockQuote,
  ...BackgroundImage,
  ...Cover,
  ...Frame,
  ...FullBleed,
  ...Unordered,
  ...Time,
]
