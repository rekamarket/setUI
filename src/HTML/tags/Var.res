open HTML

module Var = {
  let tag = HTML.Var

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
    HTML.Palpable,
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
