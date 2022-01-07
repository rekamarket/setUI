open HTML

module Span = {
  let tag = HTML.Span

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
    // HTML.Palpable,
  ]

  let permittedContent = [
    HTML.Phrasing
  ]

  let implicitARIARole = [
    HTML.None
  ]

  let permittedARIARoles = [
    HTML.Any,
  ]
}
