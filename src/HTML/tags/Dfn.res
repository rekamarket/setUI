open HTML

module Dfn = {
  let tag = HTML.Dfn

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
    HTML.Palpable,
  ]

  let permittedContent = [
    HTML.Phrasing
  ]

  let implicitARIARole = [
    HTML.Term
  ]

  let permittedARIARoles = [
    HTML.Any,
  ]
}
